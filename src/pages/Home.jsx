import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../context/LoadingContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import CaruselComponent from "./../components/ProyectosComponents/caruselComponent";
import ExperieciaCardComponent from "../components/ProyectosComponents/experieciaCardComponent";
import MouseScrollIcon from "../components/MouseScrollIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import SocialLinks from "../components/SocialLinks";
import { experiencias } from "../data/experiencias";

const Home = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  const isMobile = useMediaQuery("(max-width:600px)");

  // Refs para scroll por secciones
  const mouseSectionRef = React.useRef(null);
  const aboutSectionRef = React.useRef(null);
  const expSectionRef = React.useRef(null);

  // Scroll snap en el contenedor principal
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        background: "linear-gradient(135deg, #232526 0%,rgb(0, 0, 0) 100%)",
        color: "#fff",
        scrollSnapType: "y mandatory",
        scrollSnapStop: "always", // ✨ asegura que el scroll se "pegue" bien
        scrollPaddingTop: "100px", // ✨ ayuda con espacios visuales
        overflowY: "auto",
        height: "100vh",
        scrollBehavior: "smooth", // Asegura transición suave entre secciones
      }}
    >
      {/* Sección 1: Presentación + Carrusel + MouseScrollIcon */}
      <Box
        ref={mouseSectionRef}
        sx={{
          scrollSnapAlign: "start",
          minHeight: { xs: "100vh", md: "100vh" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          px: { xs: 1, sm: 2, md: 4 },
          position: "relative",
          top: 0, // Restaurado a 0 para centrar correctamente
          left: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 2000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Cambiado de flex-end a center
            flex: 1,
            minHeight: { xs: "80vh", md: "80vh" },
            // Removido position: 'absolute', left, right, bottom, pb
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            color="#1e88e5"
            textAlign="center"
            fontSize={{ xs: "2.2rem", sm: "3rem", md: "4rem" }}
          >
            Software Developer
          </Typography>
          <Typography
            variant="h2"
            fontWeight="semibold"
            textAlign="center"
            fontSize={{ xs: "1.8rem", sm: "2.5rem", md: "3rem" }}
          >
            Ing. Carlos Guagrilla
          </Typography>

          <SocialLinks />

          <Divider
            sx={{
              bgcolor: "#ffffff",
              height: { xs: 2, md: 3 },
              borderRadius: 2,
              my: 6,
            }}
          />
          <CaruselComponent />
          <MouseScrollIcon
            text={isMobile ? "Desliza hacia abajo" : "Desplázate con la rueda"}
          />
          <Divider
            sx={{
              backgroundColor: "red",
              height: { xs: 2, md: 3 },
              borderRadius: 2,
              my: 6,
            }}
          />
        </Box>
      </Box>
      {/* Sección 2: Sobre mí */}
      <Box
        ref={aboutSectionRef}
        sx={{
          scrollSnapAlign: "start",
          minHeight: { xs: "90vh", md: "90vh" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          px: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            minHeight: { xs: "80vh", md: "80vh" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#1e88e5"
            mb={2}
            textAlign="center"
          >
            Sobre mí
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              mb: 2,
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
              lineHeight: 1.7,
            }}
          >
            Apasionado por la tecnología y la creación de experiencias digitales, me desempeño tanto en el desarrollo frontend como backend. Me motiva enfrentar nuevos desafíos que impulsen mi crecimiento profesional y técnico. Estoy en constante aprendizaje e investigación de nuevas tecnologías, las cuales integro en mis proyectos para ofrecer soluciones más robustas y completas. Creo firmemente que la práctica constante es fundamental para evolucionar como desarrollador.
          </Typography>
          <Divider
            sx={{
              bgcolor: "#1e88e5",
              height: { xs: 2, md: 3 },
              borderRadius: 2,
              my: 6,
            }}
          />
        </Box>
      </Box>
      {/* Sección 3: Experiencia Laboral */}
      <Box
        ref={expSectionRef}
        sx={{
          scrollSnapAlign: "start",
          minHeight: { xs: "90vh", md: "90vh" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          px: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            minHeight: { xs: "80vh", md: "80vh" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#1e88e5"
            mb={2}
            textAlign="center"
          >
            Experiencia Laboral 💼
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ccc",
              mb: 4,
              textAlign: "center",
              maxWidth: 800,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            A lo largo de mi trayectoria he tenido la oportunidad de participar en distintos entornos profesionales, fortaleciendo mis habilidades en desarrollo web, soporte IT e investigación tecnológica. Cada experiencia ha contribuido a mi crecimiento como desarrollador, permitiéndome aplicar lo aprendido en proyectos reales.
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="stretch"
            gap={3}
            mb={4}
            width="100%"
          >
            {experiencias.map((exp, idx) => (
              <ExperieciaCardComponent key={idx} {...exp} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
