import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

// Usando TypeScript para definir exatamente o que o Card precisa receber
interface CardProps {
  title: ReactNode;
  description: string;
  to: string; // Rota para onde o card vai levar ao clicar
}

export default function Card({ title, description, to }: CardProps) {
  return (
    // O Card inteiro é um Link, então clicar em qualquer lugar dele navega a página
    <Link to={to} className="card-container">
      <div className="card-tape"></div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </Link>
  );
}
