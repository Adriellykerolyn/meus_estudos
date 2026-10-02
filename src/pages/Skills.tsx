import { Link } from 'react-router-dom';
import './Skills.css';

export default function Skills() {
  const hardSkills = [
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'React & Ecossistema', level: 80 },
    { name: 'Node.js & APIs', level: 75 },
    { name: 'Python & Dados', level: 70 },
    { name: 'SQL & Bancos Relacionais', level: 65 },
    { name: 'Docker & DevOps Básico', level: 50 },
  ];

  const softSkills = [
    { name: 'Comunicação Assíncrona', desc: 'Clareza ao escrever e reportar status em times remotos.' },
    { name: 'Resolução de Problemas', desc: 'Capacidade de quebrar problemas complexos em partes menores e pesquisar soluções.' },
    { name: 'Adaptabilidade', desc: 'Facilidade para aprender novas linguagens, tecnologias e se adequar a mudanças.' },
    { name: 'Colaboração & Code Review', desc: 'Trabalho em equipe, avaliações de código construtivas e empatia.' },
    { name: 'Gestão de Tempo', desc: 'Priorização de tarefas, uso de técnicas ágeis e consistência nas entregas.' },
  ];

  return (
    <div className="skills-container fade-in">
      <Link to="/" className="back-link">← Voltar para Home</Link>
      
      <div className="skills-header">
        <h2>⭐️ Minhas Habilidades</h2>
        <p>Um inventário visual do que eu domino tecnicamente (Hard Skills) e das minhas competências comportamentais (Soft Skills).</p>
      </div>

      <div className="skills-grid">
        
        {/* Hard Skills */}
        <section className="skills-section hard-skills-section">
          <div className="section-header">
            <h3>💻 Hard Skills</h3>
            <p className="section-desc">Tecnologias, linguagens e ferramentas práticas.</p>
          </div>
          
          <div className="hard-skills-list">
            {hardSkills.map(skill => (
              <div key={skill.name} className="hard-skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="skills-section soft-skills-section">
          <div className="section-header">
            <h3>🧠 Soft Skills</h3>
            <p className="section-desc">Habilidades interpessoais, emocionais e de gestão.</p>
          </div>
          
          <div className="soft-skills-list">
            {softSkills.map(skill => (
              <div key={skill.name} className="soft-skill-item">
                <div className="soft-skill-icon">✨</div>
                <div className="soft-skill-content">
                  <h4>{skill.name}</h4>
                  <p>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
