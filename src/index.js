import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/index.css';
import Home from './Pages/Home';
import Project from './Pages/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>
);