import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Menu,
  X,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import projects from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.classList.add("modal-open");
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Matheus Gonçalves</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("inicio")}>Início</button>
          <button onClick={() => scrollTo("sobre")}>Sobre</button>
          <button onClick={() => scrollTo("projetos")}>Projetos</button>
          <a href="https://github.com/MatheusG365" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot" />
              Portfólio pessoal
            </div>

            <h1>
              Matheus
              <span>Gonçalves.</span>
            </h1>

            <p className="hero-text">
              Desenvolvedor em formação, apaixonado por tecnologia e por transformar
              ideias em projetos reais através do código.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("projetos")}>
                Ver projetos
                <ArrowDown size={18} />
              </button>

              <a
                className="secondary-button"
                href="https://github.com/MatheusG365"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                Meu GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-image-frame">
              <img src="/images/profile/profile-placeholder.jpg" alt="Foto de Matheus Gonçalves" />
              <div className="hero-image-overlay" />
              <div className="hero-code-card">
                <Code2 size={18} />
                <span>building ideas_</span>
              </div>
            </div>
            <div className="floating-chip chip-one">React</div>
            <div className="floating-chip chip-two">JavaScript</div>
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="section-heading reveal">
            <span className="section-number">01</span>
            <div>
              <span className="section-kicker">Sobre mim</span>
              <h2>Um pouco sobre <span>quem eu sou.</span></h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                Gosto de aprender criando. Meus projetos são uma forma de colocar em
                prática programação, desenvolvimento web e interfaces..,
              </p>
              <p>
                Aqui você encontra alguns trabalhos e atividades que fazem parte da
                minha jornada de aprendizado e desenvolvimento.
              </p>
            </div>

            <div className="about-stats reveal">
              <div className="stat">
                <strong>05</strong>
                <span>Projetos em destaque</span>
              </div>
              <div className="stat">
                <strong>∞</strong>
                <span>Ideias para construir</span>
              </div>
              <div className="stat">
                <strong>01</strong>
                <span>Jornada em evolução</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="projects section">
          <div className="section-heading reveal">
            <span className="section-number">02</span>
            <div>
              <span className="section-kicker">Portfólio</span>
              <h2>Projetos que <span>estou construindo.</span></h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => openProject(project)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="footer-brand">Matheus Gonçalves</span>
          <span className="footer-copy">Desenvolvimento • Tecnologia • Aprendizado</span>
        </div>

        <a
          href="https://github.com/MatheusG365"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <Github size={17} />
          GitHub
          <ExternalLink size={14} />
        </a>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </>
  );
}