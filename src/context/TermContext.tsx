import React, { createContext, useContext, useState } from 'react';
import { mockTerms } from '../data/mockTerms';
import type { TermStatus } from '../data/mockTerms';

export interface TermItem {
  id: string;
  term: string;
  simpleExplanation: string;
  technicalExplanation?: string;
  status: TermStatus;
}

interface TermContextData {
  terms: TermItem[];
  addTerm: (term: string, explanation: string) => void;
}

const TermContext = createContext<TermContextData | undefined>(undefined);

export const TermProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [terms, setTerms] = useState<TermItem[]>(mockTerms);

  const addTerm = (term: string, explanation: string) => {
    const newTerm: TermItem = {
      id: `term-${Date.now()}`,
      term,
      simpleExplanation: explanation,
      status: 'Preciso estudar'
    };
    // Adiciona no topo da lista
    setTerms((prev) => [newTerm, ...prev]);
  };

  return (
    <TermContext.Provider value={{ terms, addTerm }}>
      {children}
    </TermContext.Provider>
  );
};

export const useTermContext = () => {
  const context = useContext(TermContext);
  if (!context) throw new Error('useTermContext must be used within TermProvider');
  return context;
};
