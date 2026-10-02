import React, { createContext, useContext, useState } from 'react';
import { mockStudies } from '../data/mockStudies';
import type { StudyCategory, StudyStatus } from '../data/mockStudies';

export interface StudyLog {
  id: string;
  description: string;
  durationMinutes: number;
}

export interface DailyLog {
  date: string; // YYYY-MM-DD
  logs: StudyLog[];
}

interface StudyContextType {
  studies: StudyCategory[];
  updateResourceStatus: (categoryId: string, topicId: string, resourceId: string, newStatus: StudyStatus) => void;
  dailyLogs: Record<string, DailyLog>;
  addStudyLog: (date: string, description: string, durationMinutes: number) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [studies, setStudies] = useState<StudyCategory[]>(mockStudies);
  const [dailyLogs, setDailyLogs] = useState<Record<string, DailyLog>>({});

  const updateResourceStatus = (categoryId: string, topicId: string, resourceId: string, newStatus: StudyStatus) => {
    setStudies(prev => prev.map(cat => {
      if (cat.id !== categoryId) return cat;
      return {
        ...cat,
        topics: cat.topics.map(topic => {
          if (topic.id !== topicId) return topic;
          return {
            ...topic,
            resources: topic.resources.map(res => {
              if (res.id !== resourceId) return res;
              return { ...res, status: newStatus };
            })
          };
        })
      };
    }));
  };

  const addStudyLog = (date: string, description: string, durationMinutes: number) => {
    setDailyLogs(prev => {
      const existingDay = prev[date] || { date, logs: [] };
      const newLog: StudyLog = {
        id: Math.random().toString(36).substring(7),
        description,
        durationMinutes
      };
      
      return {
        ...prev,
        [date]: {
          ...existingDay,
          logs: [...existingDay.logs, newLog]
        }
      };
    });
  };

  return (
    <StudyContext.Provider value={{ studies, updateResourceStatus, dailyLogs, addStudyLog }}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudyContext = () => {
  const context = useContext(StudyContext);
  if (!context) throw new Error('useStudyContext must be used within a StudyProvider');
  return context;
};
