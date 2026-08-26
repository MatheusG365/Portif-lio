import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article
      className="project-card reveal"
      style={{ "--delay": `${index * 80}ms` }}
      onClick={onOpen}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onOpen();
      }}
      aria-label={`Abrir detalhes do projeto ${project.title}`}
    >
      <div className="project-card-image">
        <img src={project.images[0]} alt="" />
        <div className="project-card-shade" />
        <span className="project-number">0{index + 1}</span>
        <span className="project-open">
          <ArrowUpRight size={20} />
        </span>
      </div>

      <div className="project-card-content">
        <div className="project-card-top">
          <span>{project.category}</span>
          {project.status === "Em desenvolvimento" && (
            <span className="project-status">{project.status}</span>
          )}
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}