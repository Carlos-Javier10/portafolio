import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../context/LoadingContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import CaruselComponent from "./../components/ProyectosComponents/caruselComponent";

const Home = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  if (!isLoaded) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <CircularProgress color="primary" />
        <Typography variant="body1" mt={2}>
          Cargando...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      <Box
        maxWidth={2000}
        mx="auto"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          mt={{ xs: 4, md: 10 }}
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
          mt={2}
          textAlign="center"
          fontSize={{ xs: "1.8rem", sm: "2.5rem", md: "3rem" }}
        >
          Carlos Guagrilla
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 2, sm: 4 }}
          mt={7}
          width="100%"
        >
          <a
            href="https://www.linkedin.com/in/carlos-javier-guagrilla-chicaiza-30500a1a4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon
              sx={{
                fontSize: 40,
                color: "#0A66C2",
                p: 0.5,
              }}
            />
          </a>
          <a
            href="https://github.com/Carlos-Javier10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon
              sx={{
                fontSize: 40,
                color: "#e0e0e0",
                p: 0.5,
              }}
            />
          </a>
        </Box>
        <Divider
          sx={{
            bgcolor: "#ffffff",
            height: { xs: 2, md: 3 },
            borderRadius: 2,
            my: 6,
          }}
        />
        <CaruselComponent />
        <Divider
          sx={{
            backgroundColor: "red",
            height: { xs: 2, md: 3 },
            borderRadius: 2,
            my: 6,
          }}
        />
        <Typography
          variant="h4"
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
          Me apasiona la tecnología y todo lo relacionado con crear experiencias
          digitales. Trabajo tanto en el frontend como en el backend, siempre
          buscando nuevos retos que me ayuden a mejorar. Me gusta aprender
          tecnologías nuevas para integrarlas en mis proyectos y hacerlos más
          completos. Investigo constantemente y aplico lo que aprendo, porque
          creo que la práctica es clave para crecer como desarrollador.
        </Typography>
        <Divider
          sx={{
            bgcolor: "#1e88e5",
            height: { xs: 2, md: 3 },
            borderRadius: 2,
            my: 6,
          }}
        />
        <Typography
          variant="h4"
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
            color: "#fff",
            mb: 2,
            textAlign: "center",
            maxWidth: 900,
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
            lineHeight: 1.7,
          }}
        >
          Pasante de Desarrollo Web - Universidad de las Americas
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
          Pasante de IT - Tababela Cargo Center S.A.
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
          Pasante de Desarrollo Web - Pronavalle
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
