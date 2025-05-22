// Home.js
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { LoadingContext } from '../context/LoadingContext'; // Importa el contexto
import ActionAreaCard from '../components/Card'; // Importa el componente Card de Material-UI
import '../styles/homeStyle.css'; // Importa el archivo CSS
import vsgImage from '../assets/images/vsg.png'; // Importa la imagen
import '../styles/cardStyle.css'; // Importa el archivo CSS

const Home = () => {
  // Accedemos al contexto de carga
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  // Usamos useEffect para marcar como cargado cuando el componente se monte
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  // Si aún no está cargado, mostramos un mensaje de carga
  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  // Si ya está cargado, mostramos el contenido de la página
  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold mt-10">¡Bienvenido a mi Portafolio! 🎨</h1>
      <p className="text-gray-600 mt-4">Explora mis proyectos, conoce más sobre mí y contáctame.</p>
      <div className="mt-6">
        <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Ver Proyectos
        </Link>
      </div>
      <div className="mt-10 card-container">
        {/* Aquí se usa el nuevo componente de Material-UI */}
        <ActionAreaCard
          title="Proyecto 1"
          description="Descripción del proyecto 1"
          image={vsgImage} // Usa la imagen importada
        />
        <ActionAreaCard
          title="Proyecto 2"
          description="Descripción del proyecto 2"
          image={vsgImage} // Usa la imagen importada
        />
        <ActionAreaCard
          title="Proyecto 3"
          description="Descripción del proyecto 3"
        />
      </div>

    </section>
  );
};
export default Home;
