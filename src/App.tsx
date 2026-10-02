import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Studies from './pages/Studies';
import Projects from './pages/Projects';
import Terms from './pages/Terms';
import Header from './components/Header';
import StudyCategoryDetail from './pages/StudyCategoryDetail';
import JobsRadar from './pages/JobsRadar';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudos" element={<Studies />} />
          <Route path="/estudos/:categoryId" element={<StudyCategoryDetail />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/vagas" element={<JobsRadar />} />
          <Route path="/habilidades" element={<Skills />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
