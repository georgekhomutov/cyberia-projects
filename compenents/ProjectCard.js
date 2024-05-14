// src/components/ProjectCard.js
import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.name} className={styles.image} />
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
