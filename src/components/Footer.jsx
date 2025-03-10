import React from 'react';
import '../styles/footerStyle.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Mi Portafolio | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;