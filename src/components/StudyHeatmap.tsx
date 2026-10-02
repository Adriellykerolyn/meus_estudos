import { useState } from 'react';
import { useStudyContext } from '../context/StudyContext';
import './StudyHeatmap.css';

export default function StudyHeatmap() {
  const { dailyLogs, addStudyLog } = useStudyContext();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [logDesc, setLogDesc] = useState('');
  const [logMins, setLogMins] = useState(30);

  // Generate last 112 days (16 weeks x 7 days)
  const today = new Date();
  const days = Array.from({ length: 112 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (111 - i));
    return d.toISOString().split('T')[0];
  });

  const getIntensity = (date: string) => {
    const logs = dailyLogs[date]?.logs || [];
    const total = logs.reduce((acc, log) => acc + log.durationMinutes, 0);
    if (total === 0) return 'level-0';
    if (total <= 30) return 'level-1';
    if (total <= 60) return 'level-2';
    if (total <= 120) return 'level-3';
    return 'level-4';
  };

  const handleSquareClick = (date: string) => {
    setSelectedDate(date);
    setLogDesc('');
    setLogMins(30);
  };

  const handleSave = () => {
    if (selectedDate && logDesc) {
      addStudyLog(selectedDate, logDesc, logMins);
      setLogDesc('');
    }
  };

  return (
    <div className="heatmap-container">
      <h3>📈 Histórico de Contribuições</h3>
      <p className="heatmap-subtitle">Clique em um quadradinho para registrar o que você estudou e por quanto tempo.</p>
      
      <div className="heatmap-grid">
        {days.map(date => {
          const totalMins = dailyLogs[date]?.logs.reduce((acc, log) => acc + log.durationMinutes, 0) || 0;
          return (
            <div 
              key={date}
              className={`heatmap-square ${getIntensity(date)}`}
              title={`${date}: ${totalMins} min`}
              onClick={() => handleSquareClick(date)}
            />
          );
        })}
      </div>
      
      <div className="heatmap-legend">
        <span>Menos</span>
        <div className="heatmap-square level-0"></div>
        <div className="heatmap-square level-1"></div>
        <div className="heatmap-square level-2"></div>
        <div className="heatmap-square level-3"></div>
        <div className="heatmap-square level-4"></div>
        <span>Mais</span>
      </div>

      {selectedDate && (
        <div className="heatmap-modal-overlay" onClick={() => setSelectedDate(null)}>
          <div className="heatmap-modal" onClick={e => e.stopPropagation()}>
            <h4>Registrar estudos ({selectedDate})</h4>
            
            <div className="modal-logs">
              {dailyLogs[selectedDate]?.logs.length === 0 && (
                <p className="empty-logs">Nenhum estudo registrado neste dia.</p>
              )}
              {dailyLogs[selectedDate]?.logs.map(log => (
                <div key={log.id} className="modal-log-item">
                  <span className="log-time">{log.durationMinutes} min</span>
                  <span className="log-desc">{log.description}</span>
                </div>
              ))}
            </div>

            <div className="modal-form">
              <input 
                type="text" 
                placeholder="O que você estudou?" 
                value={logDesc}
                onChange={e => setLogDesc(e.target.value)}
              />
              <div className="modal-form-row">
                <input 
                  type="number" 
                  min="5" 
                  step="5"
                  value={logMins}
                  onChange={e => setLogMins(Number(e.target.value))}
                /> 
                <span>minutos</span>
              </div>
              <button onClick={handleSave}>+ Salvar Registro</button>
            </div>
            
            <button className="modal-close" onClick={() => setSelectedDate(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
