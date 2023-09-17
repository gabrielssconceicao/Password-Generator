import React from 'react';
import '../css/header.css';
interface HeaderProps {
  title: string;
  description: string;
}
export const Header: React.FC<HeaderProps> = ({
  description,
  title,
}: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{description}</p>
    </header>
  );
};
