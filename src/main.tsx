import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { StudyProvider } from './context/StudyContext.tsx';
import { TermProvider } from './context/TermContext.tsx';
import './styles/global.css'; // Importando nossos estilos globais

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StudyProvider>
        <TermProvider>
          <App />
        </TermProvider>
      </StudyProvider>
    </BrowserRouter>
  </StrictMode>,
);
