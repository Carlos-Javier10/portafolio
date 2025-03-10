import React from 'react';
import { Link } from "react-router-dom";
import '../styles/headerStyle.css'; // Importa el archivo CSS

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Inicio</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">Sobre mí</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Proyectos</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contacto</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;