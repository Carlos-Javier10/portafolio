import React from 'react';
import MediaCard from '../components/ProyectosComponents/cardComponent';
import projectData from '../data/proyectos';
import '../styles/projectsStyle.css';

const Projects = () => {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Mis Proyectos 🚀</h1>
      <div className="mt-10 card-container">
        {Object.values(projectData).map((project, idx) => (
          <MediaCard
            key={idx}
            image={project.image}
            title={project.title}
            heading={project.heading}
            description={project.description}
            descriptionLarga={project.descriptionLarga}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;