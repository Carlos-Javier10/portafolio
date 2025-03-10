import React, { useContext, useEffect } from 'react';
import '../styles/aboutStyle.css'; // Importa el archivo CSS
import { LoadingContext } from '../context/LoadingContext'; // Importa el contexto

const About = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  if (!isLoaded) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se carga la página
  }

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Sobre Mí 🧑‍💻</h1>
      <p className="text-gray-600 mt-4">
        Soy un desarrollador apasionado por la tecnología y la creación de experiencias digitales.
        Me especializo en el desarrollo web y siempre estoy en busca de nuevos retos.
      </p>
    </section>
  );
};

export default About;
