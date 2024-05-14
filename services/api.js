// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.test.cyberia.studio/api/v1',
});

export const getProjects = () => api.get('/projects');
export const getProjectCategories = () => api.get('/project-categories');
export const sendFeedback = (data) => api.post('/feedbacks', data);
