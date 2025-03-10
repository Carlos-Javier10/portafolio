import Card from "../components/Card";

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1", image: "/images/proyecto1.jpg" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2", image: "/images/proyecto2.jpg" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3", image: "/images/proyecto3.jpg" }
];

const Projects = () => {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Mis Proyectos 🚀</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
