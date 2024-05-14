// src/components/Breadcrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
          {index < crumbs.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
