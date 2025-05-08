import superImage from "../assets/images/superonline.png";

// ... existing code ...

const projectData = {
  proyecto1: {
    image: superImage,
    title: "Tienda SuperOnline",
    heading: "Tienda SuperOnline",
    description:
      "Aplicación SPA construida con Vite y Material UI para mostrar productos con filtros por categoría. Incluye panel de administración protegido con JWT, backend en Express y base de datos en SQLite3.",
    descriptionLarga:
      "Una aplicación SPA (Single Page Application) desarrollada con Vite y componentes visuales de Material UI (MUI), diseñada para la visualización de productos organizados en categorías, con opciones de búsqueda dinámica y filtros aplicables. El sistema incluye autenticación segura y un panel administrativo con rutas protegidas.\n\n🖥️ Frontend:\n🔧 Framework: Vite para una carga rápida y desarrollo eficiente.\n\n🎨 UI: Material UI (MUI) para una interfaz moderna, responsiva y accesible.\n\n✅ Funcionalidades principales:\n\nVisualización de productos.\n\nFiltro por categorías y búsqueda por nombre.\n\nNavegación fluida sin recargas gracias al enfoque SPA.\n\nAcceso al panel de administración protegido con login.\n\n🔐 Autenticación:\n📌 Sistema de login para administradores.\n\n🔐 Uso de JWT (JSON Web Tokens) para proteger rutas sensibles y mantener sesiones activas.\n\n🧱 Rutas administrativas protegidas en frontend y backend.\n\n🧩 Backend:\n🚀 Desarrollado con Express.js como servidor principal.\n\n🌐 API RESTful para el manejo completo de productos:\nCRUD (Crear, Leer, Actualizar, Eliminar).\n\n🔐 Validación de tokens JWT para todos los endpoints protegidos.\n\n🗃️ Base de Datos:\n💾 SQLite3 como sistema de almacenamiento de datos.\nIdeal para entornos de desarrollo, pruebas y despliegues ligeros.\n\n🐳 Infraestructura y despliegue:\n🐳 Contenerizado con Docker, permitiendo replicar el entorno en cualquier sistema.\n\n☁️ Integración con Cloudflare Tunnel para exponer el backend y  frontend de forma segura en internet:\n\nAcceso al backend/API a través de un dominio personalizado protegido con Cloudflare.\n\nTunelización automática sin necesidad de abrir puertos en el servidor local.\n\n🌍 Configuración lista para deploy en local o en la nube con Docker Compose.",
    onLearnMore: () => alert("Más información de Proyecto 1"),
  },
  proyecto2: {
    image: "https://your-image-url.com/proyecto2.jpg",
    title: "Proyecto 2",
    heading: "Proyecto 2",
    description: "Descripción del proyecto 2",
    descriptionLarga: "Descripción larga del proyecto 2",
    onLearnMore: () => alert("Más información de Proyecto 2"),
  },
  proyecto3: {
    image: "https://your-image-url.com/proyecto2.jpg",
    title: "Proyecto 3",
    heading: "Proyecto 3",
    description: "Descripción del proyecto 3",
    descriptionLarga: "Descripción larga del proyecto 2",
    onLearnMore: () => alert("Más información de Proyecto 2"),
  },
  // Agrega más proyectos según sea necesario
};

export default projectData;