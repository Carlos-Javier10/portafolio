import React from 'react';
import '../styles/footerStyle.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-3 px-2 shadow z-40">
      <p className="text-sm">&copy; {new Date().getFullYear()} Carlos Guagrilla | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;