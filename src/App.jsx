import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRouter.jsx"; // Mantenemos el archivo de rutas

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <AppRoutes /> {/* Aquí están todas las rutas */}
      </main>
      <Footer />
    </div>
  );
};

export default App;