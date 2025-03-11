// App.js
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRouter.jsx"; // Rutas de la aplicación
import { LoadingProvider } from './context/LoadingContext'; // Importa el proveedor de contexto

const App = () => {
  return (
    <LoadingProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <AppRoutes /> {/* Aquí están todas las rutas */}
        </main>
        <Footer />
      </div>
    </LoadingProvider>
  );
};

export default App;
