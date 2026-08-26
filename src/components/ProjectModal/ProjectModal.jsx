import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);

  const next = () => {
    setCurrent((value) => (value + 1) % project.images.length);
  };

  const previous = () => {
    setCurrent((value) => (value - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes do projeto ${project.title}`}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={21} />
        </button>

        <div
          className="modal-gallery"
          onTouchStart={(event) => {
            touchStart.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const end = event.changedTouches[0].clientX;
            const distance = end - touchStart.current;
            if (Math.abs(distance) > 45) {
              distance < 0 ? next() : previous();
            }
            touchStart.current = null;
          }}
        >
          <img
            src={project.images[current]}
            alt={`${project.title} — imagem ${current + 1}`}
          />

          <button className="gallery-arrow gallery-left" onClick={previous} aria-label="Imagem anterior">
            <ArrowLeft size={21} />
          </button>
          <button className="gallery-arrow gallery-right" onClick={next} aria-label="Próxima imagem">
            <ArrowRight size={21} />
          </button>

          <div className="gallery-counter">
            {String(current + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-heading">
            <div>
              <span className="modal-kicker">{project.category}</span>
              <h2>{project.title}</h2>
            </div>
            {project.status === "Em desenvolvimento" && (
              <span className="modal-status">{project.status}</span>
            )}
          </div>

          <p className="modal-description">{project.description}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="modal-actions">
            <a
              className="modal-github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
              <ExternalLink size={14} />
            </a>

            {project.extraGithub && (
              <a
                className="modal-secondary-link"
                href={project.extraGithub.url}
                target="_blank"
                rel="noreferrer"
              >
                <Code2Fallback />
                {project.extraGithub.label}
              </a>
            )}
          </div>

          <div className="gallery-dots" aria-label="Selecionar imagem">
            {project.images.map((image, index) => (
              <button
                key={image}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`Abrir imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Code2Fallback() {
  return <span className="backend-icon">&lt;/&gt;</span>;
}