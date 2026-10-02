import { Link } from 'react-router-dom';
import { useStudyContext } from '../context/StudyContext';
import StudyHeatmap from '../components/StudyHeatmap';
import './Studies.css';

export default function Studies() {
  const { studies } = useStudyContext();
  
  return (
    <div className="studies-container">
      <div className="studies-header">
        <h2>📚 Estudos e Certificações</h2>
        <p>Meu mapa mental de tecnologias e aprendizados.</p>
      </div>

      <StudyHeatmap />

      <div className="categories-grid">
        {studies.map((category) => (
          <Link 
            key={category.id} 
            to={`/estudos/${category.id}`} 
            className="category-card"
            style={{ textDecoration: 'none' }}
          >
            <div className="category-header-simple">
              <span className="category-title">{category.title}</span>
              <span className="icon-arrow">➔</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
