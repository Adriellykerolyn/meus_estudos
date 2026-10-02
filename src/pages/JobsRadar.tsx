import { useState } from 'react';
import { useTermContext } from '../context/TermContext';
import './JobsRadar.css';

export default function JobsRadar() {
  const [jobText, setJobText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const { addTerm } = useTermContext();

  const [savedTerms, setSavedTerms] = useState<string[]>([]);
  const [savedSkills, setSavedSkills] = useState<string[]>([]);

  const handleAnalyze = () => {
    if (!jobText.trim()) return;
    
    setIsAnalyzing(true);
    setShowResult(false);
    setSavedTerms([]);
    setSavedSkills([]);

    // Simular o tempo de resposta de uma IA (2 segundos)
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2000);
  };

  const handleSaveTerm = (term: string, explanation: string) => {
    addTerm(term, explanation);
    setSavedTerms((prev) => [...prev, term]);
  };

  const handleSaveSkill = (skill: string) => {
    // Aqui no futuro adicionaremos à trilha (StudyContext). Por enquanto apenas UI.
    setSavedSkills((prev) => [...prev, skill]);
  };

  return (
    <div className="jobs-radar-container fade-in">
      <div className="jobs-radar-header">
        <h2>🎯 Radar de Vagas (IA)</h2>
        <p>Cole a descrição da vaga que você quer aplicar. A Inteligência Artificial vai extrair os requisitos, descobrir o que falta você estudar e explicar os termos técnicos que você não conhece.</p>
      </div>

      <div className="jobs-radar-input-section">
        <textarea
          placeholder="Cole a descrição da vaga do LinkedIn, Gupy, etc aqui..."
          value={jobText}
          onChange={(e) => setJobText(e.target.value)}
          className="job-textarea"
          disabled={isAnalyzing}
        ></textarea>
        
        <button 
          className={`btn-analyze ${isAnalyzing ? 'loading' : ''} ${!jobText.trim() ? 'disabled' : ''}`}
          onClick={handleAnalyze}
          disabled={isAnalyzing || !jobText.trim()}
        >
          {isAnalyzing ? '✨ Analisando a Vaga...' : '✨ Descodificar Vaga com IA'}
        </button>
      </div>

      {showResult && (
        <div className="jobs-radar-results fade-in">
          <div className="results-grid">
            
            {/* Habilidades Faltantes */}
            <div className="result-card">
              <h3 className="result-title">🛠️ Habilidades Identificadas</h3>
              <p className="result-desc">A IA encontrou essas competências que você pode querer adicionar ao seu plano de estudos.</p>
              
              <div className="skills-list">
                <div className="skill-item">
                  <div>
                    <strong>AWS (ECS e Fargate)</strong>
                    <span className="skill-type hard">Hard Skill</span>
                  </div>
                  <button 
                    className="btn-add-study"
                    onClick={() => handleSaveSkill('AWS')}
                    disabled={savedSkills.includes('AWS')}
                  >
                    {savedSkills.includes('AWS') ? '✅ Adicionado' : '+ Plano de Estudo'}
                  </button>
                </div>
                <div className="skill-item">
                  <div>
                    <strong>Testes E2E (Cypress)</strong>
                    <span className="skill-type hard">Hard Skill</span>
                  </div>
                  <button 
                    className="btn-add-study"
                    onClick={() => handleSaveSkill('Cypress')}
                    disabled={savedSkills.includes('Cypress')}
                  >
                    {savedSkills.includes('Cypress') ? '✅ Adicionado' : '+ Plano de Estudo'}
                  </button>
                </div>
                <div className="skill-item">
                  <div>
                    <strong>Comunicação Assíncrona</strong>
                    <span className="skill-type soft">Soft Skill</span>
                  </div>
                  <button 
                    className="btn-add-study"
                    onClick={() => handleSaveSkill('Comunicacao')}
                    disabled={savedSkills.includes('Comunicacao')}
                  >
                    {savedSkills.includes('Comunicacao') ? '✅ Adicionado' : '+ Plano de Estudo'}
                  </button>
                </div>
              </div>
            </div>

            {/* Termos Desconhecidos */}
            <div className="result-card">
              <h3 className="result-title">📚 Termos a Aprender</h3>
              <p className="result-desc">A IA notou que esses termos não estão no seu Dicionário. Aqui está a explicação:</p>
              
              <div className="terms-list">
                <div className="term-item">
                  <div className="term-header">
                    <strong>BFF (Backend for Frontend)</strong>
                  </div>
                  <p className="term-explanation">
                    Um padrão de arquitetura onde criamos um backend focado em fornecer dados exatamente do jeito que a interface precisa (evitando consultas pesadas no frontend).
                  </p>
                  <button 
                    className="btn-save-glossary"
                    onClick={() => handleSaveTerm('BFF', 'Um padrão de arquitetura onde criamos um backend focado em fornecer dados exatamente do jeito que a interface precisa.')}
                    disabled={savedTerms.includes('BFF')}
                  >
                    {savedTerms.includes('BFF') ? '✅ Salvo' : '💾 Salvar no Dicionário'}
                  </button>
                </div>

                <div className="term-item">
                  <div className="term-header">
                    <strong>Trunk-Based Development</strong>
                  </div>
                  <p className="term-explanation">
                    Metodologia onde todos os devs mandam código para a branch principal (main/trunk) várias vezes ao dia, ao invés de usar branches longas. Evita conflitos gigantes!
                  </p>
                  <button 
                    className="btn-save-glossary"
                    onClick={() => handleSaveTerm('Trunk-Based Development', 'Metodologia onde todos os devs mandam código para a branch principal (main/trunk) várias vezes ao dia.')}
                    disabled={savedTerms.includes('Trunk-Based Development')}
                  >
                    {savedTerms.includes('Trunk-Based Development') ? '✅ Salvo' : '💾 Salvar no Dicionário'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
