import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#23272f', // Igual que el header
        color: '#fff',
        textAlign: 'center',
        padding: '0.75rem 0.5rem',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.12)',
        zIndex: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Carlos Guagrilla | cjdevlabs.com
      </p>
    </footer>
  );
};

export default Footer;