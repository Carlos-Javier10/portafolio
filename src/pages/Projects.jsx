import React from 'react';
import ActionAreaCard from '../components/Card'; // Importa el componente Card de Material-UI
import '../styles/projectsStyle.css'; // Importa el archivo CSS

const Projects = () => {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Mis Proyectos 🚀</h1>
      <div className="mt-10 card-container">
        <ActionAreaCard
          title="Proyecto 1"
          description="Descripción del proyecto 1"
        />
        <ActionAreaCard
          title="Proyecto 2"
          description="Descripción del proyecto 2"
        />
        <ActionAreaCard
          title="Proyecto 3"
          description="Descripción del proyecto 3"
        />
        <ActionAreaCard
          title="Proyecto 4"
          description="Descripción del proyecto 4"
        />
        <ActionAreaCard
          title="Proyecto 5"
          description="Descripción del proyecto 5"
        />
        <ActionAreaCard
          title="Proyecto 6"
          description="Descripción del proyecto 6"
        />
      </div>
    </section>
  );
};

export default Projects;