import React from 'react';
import '../css/header.css';
export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Password Generator</h1>
      <p className="header__subtitle">
        With our password generator create strong password for you
      </p>
    </header>
  );
};
