import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
          <a href="https://example.com">Link to project 1</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
          <a href="https://example.com">Link to project 2</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;
