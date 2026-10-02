import { useTermContext } from '../context/TermContext';
import type { TermStatus } from '../data/mockTerms';
import './Terms.css';

function getStatusClass(status: TermStatus) {
  if (status === 'Já utilizei') return 'status-utilizei';
  if (status === 'Dominado') return 'status-dominado';
  return 'status-estudar';
}

export default function Terms() {
  const { terms } = useTermContext();

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h2>🧠 Termos Técnicos</h2>
        <p>Meu glossário pessoal para traduzir o "tecniquês" das vagas.</p>
      </div>

      <div className="terms-grid">
        {terms.map((term) => (
          <article key={term.id} className="term-card">
            <div className="term-card-header">
              <span className="term-name">{term.term}</span>
              <span className={`term-status ${getStatusClass(term.status)}`}>
                {term.status}
              </span>
            </div>
            
            <p className="term-simple"><strong>Resumo:</strong> {term.simpleExplanation}</p>
            
            {term.technicalExplanation && (
              <div className="term-technical">
                <strong>Definição Formal:</strong><br />
                {term.technicalExplanation}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
