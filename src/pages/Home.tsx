import Card from '../components/Card';
import { BookOpen, Rocket, GraduationCap } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container fade-in">
      <div className="home-intro">
        <div className="hero-badge">Workspace</div>
        <h2 className="vintage-title">Seja bem-vinda ao seu espaço, <span className="highlight">Adrielly</span>.</h2>
        <p className="hero-subtitle">Selecione uma área abaixo para explorar suas trilhas, documentar projetos e evoluir.</p>
      </div>

      <div className="cards-grid">
        <Card 
          title={<span className="card-title-icon"><GraduationCap size={24} /> Trilhas de Estudo</span>}
          description="Acompanhe suas certificações, cursos e o status de tudo que você está aprendendo."
          to="/estudos" 
        />
        
        <Card 
          title={<span className="card-title-icon"><Rocket size={24} /> Meus Projetos</span>}
          description="Portfólio de projetos vitrine e experiências que vão brilhar o olho dos recrutadores."
          to="/projetos" 
        />
        
        <Card 
          title={<span className="card-title-icon"><BookOpen size={24} /> Dicionário Técnico</span>}
          description="Glossário massivo de conceitos (Docker, API, RAG, etc) explicados de forma simples."
          to="/termos" 
        />

        <Card 
          title={<span className="card-title-icon">🎯 Radar de Vagas</span>}
          description="Cole vagas de emprego, extraia habilidades que faltam e aprenda termos com IA."
          to="/vagas" 
        />

        <Card 
          title={<span className="card-title-icon">⭐️ Minhas Habilidades</span>}
          description="Inventário detalhado das minhas Hard Skills técnicas e Soft Skills comportamentais."
          to="/habilidades" 
        />
      </div>
    </div>
  );
}
