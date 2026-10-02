import { useState } from 'react';
import { mockProjects } from '../data/mockProjects';
import './Projects.css';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>🚀 Meus Projetos</h2>
        <p>Portfólio prático de tudo que venho construindo.</p>
      </div>

      <div className="projects-grid">
        {mockProjects.map((project) => (
          <article key={project.id} className="project-card">
            
            {/* Cabecalho que sempre aparece e é clicável */}
            <div className="project-header" onClick={() => toggleProject(project.id)}>
              <div className="project-title-group">
                <span className="project-title">{project.title}</span>
                <span className="project-short-desc">{project.shortDescription}</span>
                
                <div className="project-tags">
                  {/* Tag do Tipo de Projeto (ex: Back-end) com cor condicional */}
                  <span className={`tag tag-type-${project.type}`}>
                    {project.type}
                  </span>
                  {/* Demais tecnologias usadas */}
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              <span className={`icon-arrow ${expandedId === project.id ? 'open' : ''}`}>
                ▼
              </span>
            </div>

            {/* Detalhes que aparecem apenas quando clica no projeto */}
            {expandedId === project.id && (
              <div className="project-details">
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={`Preview do ${project.title}`} className="project-image" />
                )}
                
                <p className="project-full-desc">{project.fullDescription}</p>
                
                <div className="project-links">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-btn">
                      Ver no GitHub 🐱
                    </a>
                  ) : (
                    <span className="project-btn disabled">GitHub indisponível</span>
                  )}

                  {project.deployUrl ? (
                    <a href={project.deployUrl} target="_blank" rel="noreferrer" className="project-btn">
                      Acessar Deploy 🌐
                    </a>
                  ) : (
                    <span className="project-btn disabled">Deploy indisponível</span>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
