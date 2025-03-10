import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold">¡Bienvenido a mi Portafolio! 🎨</h1>
      <p className="text-gray-600 mt-4">Explora mis proyectos, conoce más sobre mí y contáctame.</p>
      <div className="mt-6">
        <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Ver Proyectos
        </Link>
      </div>
    </section>
  );
};

export default Home;
