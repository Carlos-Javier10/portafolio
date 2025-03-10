import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card'; // Importa el componente Card
import '../styles/homeStyle.css'; // Importa el archivo CSS
import vsgImage from '../assets/images/vsg.png'; // Importa la imagen
import { LoadingContext } from '../context/LoadingContext'; // Importa el contexto

const Home = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  if (!isLoaded) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se carga la página
  }

  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold">¡Bienvenido a mi Portafolio! 🎨</h1>
      <p className="text-gray-600 mt-4">Explora mis proyectos, conoce más sobre mí y contáctame.</p>
      <div className="mt-6">
        <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Ver Proyectos
        </Link>
      </div>
      <br />
      <div className="mt-10">
        <Card
          title="Proyecto 1"
          description="Descripción del proyecto 1"
          image={vsgImage} // Usa la imagen importada
        /><br />
        <Card
          title="Proyecto 2"
          description="Descripción del proyecto 2"
        />
      </div>
    </section>
  );
};

export default Home;