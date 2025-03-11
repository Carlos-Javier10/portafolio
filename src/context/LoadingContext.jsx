// LoadingContext.js
import React, { createContext, useState } from 'react';

// Creamos el contexto
export const LoadingContext = createContext(null);

// Proveedor del contexto
export const LoadingProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
