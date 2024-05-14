// src/pages/ProjectsPage.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import FeedbackForm from '../components/FeedbackForm';
import { getProjects } from '../services/api';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response.data);
      setFilteredProjects(response.data);
    });
  }, []);

  const handleFilter = (categoryId) => {
    if (categoryId) {
      setFilteredProjects(projects.filter((project) => project.categoryId === categoryId));
    } else {
      setFilteredProjects(projects);
    }
  };

  return (
    <div className={styles.container}>
      <ProjectFilters onFilter={handleFilter} />
      <div className={styles.projectList}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <FeedbackForm />
    </div>
  );
};

export default ProjectsPage;
