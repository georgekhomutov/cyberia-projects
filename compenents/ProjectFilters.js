// src/components/ProjectFilters.js
import React, { useState, useEffect } from 'react';
import styles from './ProjectFilters.module.css';
import { getProjectCategories } from '../services/api';

const ProjectFilters = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProjectCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <button key={category.id} onClick={() => onFilter(category.id)}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
