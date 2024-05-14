// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <main>
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/" exact>
              <h1>Добро пожаловать в CYBERIA</h1>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
