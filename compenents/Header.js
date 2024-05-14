// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/projects">Кейсы</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
