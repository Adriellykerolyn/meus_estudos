import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Layers, Library } from 'lucide-react';
import './Header.css';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="header-wrapper">
      <header className="header-container">
        <div className="header-brand">
          <h1 className="vintage-title">Adrielly</h1>
          <p>Construindo, errando e aprendendo em público.</p>
        </div>

        <nav className="header-nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/estudos" className={`nav-link ${isActive('/estudos')}`}>
            <BookOpen size={18} />
            <span>Estudos</span>
          </Link>
          <Link to="/projetos" className={`nav-link ${isActive('/projetos')}`}>
            <Layers size={18} />
            <span>Projetos</span>
          </Link>
          <Link to="/termos" className={`nav-link ${isActive('/termos')}`}>
            <Library size={18} />
            <span>Termos</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
