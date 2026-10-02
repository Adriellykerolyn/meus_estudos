import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useStudyContext } from '../context/StudyContext';
import type { StudyStatus } from '../data/mockStudies';
import './StudyCategoryDetail.css';

export default function StudyCategoryDetail() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { studies, updateResourceStatus } = useStudyContext();
  const category = studies.find(c => c.id === categoryId);
  
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const toggleTopic = (topicId: string) => {
    if (openTopic === topicId) {
      setOpenTopic(null);
    } else {
      setOpenTopic(topicId);
    }
  };

  const handleStatusChange = (topicId: string, resourceId: string, newStatus: StudyStatus) => {
    if (category) {
      updateResourceStatus(category.id, topicId, resourceId, newStatus);
    }
  };

  if (!category) {
    return (
      <div className="study-detail-container">
        <h2>Categoria não encontrada 😢</h2>
        <Link to="/estudos" className="back-link">← Voltar para Estudos</Link>
      </div>
    );
  }

  return (
    <div className="study-detail-container fade-in">
      <Link to="/estudos" className="back-link">← Voltar para Estudos</Link>
      
      <div className="study-detail-header">
        <h2>{category.title}</h2>
        <p>Tópicos e tecnologias dessa trilha.</p>
      </div>

      <div className="topics-list">
        {category.topics.length === 0 && (
          <p className="empty-message">Nenhum tópico adicionado ainda.</p>
        )}

        {category.topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            
            {/* O Card Filho (Ex: Python) */}
            <div 
              className="topic-header"
              onClick={() => toggleTopic(topic.id)}
            >
              <span className="topic-title">{topic.name}</span>
              <span className={`icon-arrow ${openTopic === topic.id ? 'open' : ''}`}>
                ▼
              </span>
            </div>

            {/* Os Links/Certificações (Abre apenas se a linguagem estiver selecionada) */}
            {openTopic === topic.id && (
              <div className="topic-content">
                
                {topic.resources.length === 0 && (
                  <p className="empty-message">Ainda não há links salvos aqui.</p>
                )}

                {topic.resources.map((resource) => (
                  <div key={resource.id} className="resource-item">
                    <div className="resource-header">
                      <a href={resource.url} target="_blank" rel="noreferrer" className="resource-name">
                        {resource.name}
                      </a>
                      <span className="resource-platform">{resource.platform}</span>
                    </div>
                    <div className="status-selector">
                      <label htmlFor={`status-${resource.id}`}>Status:</label>
                      <select 
                        id={`status-${resource.id}`}
                        value={resource.status}
                        onChange={(e) => handleStatusChange(topic.id, resource.id, e.target.value as StudyStatus)}
                        className={`status-badge ${resource.status.replace(' ', '-').toLowerCase()}`}
                      >
                        <option value="Planejado">Planejado</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
