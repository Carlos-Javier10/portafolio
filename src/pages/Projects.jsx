import React from 'react';
import MediaCard from '../components/ProyectosComponents/cardComponent';
import projectData from '../data/proyectos';
import { Box } from '@mui/material';

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        background: 'linear-gradient(135deg, #232526 0%,rgb(0, 0, 0) 100%)',
        color: '#fff',
      }}
    >
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
    </Box>
  );
};

export default Projects;