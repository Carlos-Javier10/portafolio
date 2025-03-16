import React, { useContext, useEffect } from "react";
import { Avatar, Box, Container, Divider, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { LoadingContext } from '../context/LoadingContext'; // Importa el contexto
import "../styles/aboutStyle.css"; // Archivo CSS opcional para más estilos

const About = () => {
  // Accedemos al contexto de carga
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  // Usamos useEffect para marcar como cargado cuando el componente se monte
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  // Si aún no está cargado, mostramos un mensaje de carga
  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  // Si ya está cargado, mostramos el contenido de la página
  return (
    <Box className="about-container">
      <Container className="about-container-inner about-p-10">
        <Grid container spacing={3}>
          
          {/* Sección Izquierda (Foto + Datos) */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar 
                src="/tu-foto.jpg" 
                className="about-avatar"
              />
              <Typography variant="h6" className="about-typography">Carlo</Typography>
              <Typography variant="body2" color="textSecondary" className="about-typography">Desarrollador Web</Typography>
              <Divider className="about-divider" />
              <Typography variant="body2" className="about-typography">📧 carlo@email.com</Typography>
              <Typography variant="body2" className="about-typography">🔗 linkedin.com/in/carlo</Typography>
            </Box>
          </Grid>

          {/* Sección Derecha (Información) */}
          <Grid item xs={12} md={8}>
            <Paper className="about-paper">
              <Typography variant="h5">Sobre Mí 🧑‍💻</Typography>
              <Typography variant="body1">
                Soy un desarrollador apasionado por la tecnología y la creación de experiencias digitales.
                Me especializo en el desarrollo web y siempre estoy en busca de nuevos retos.
              </Typography>
            </Paper>

            <Paper className="about-paper">
              <Typography variant="h5">Habilidades 🚀</Typography>
              <List>
                <ListItem className="about-list-item">⚡ JavaScript, React, Node.js</ListItem>
                <ListItem className="about-list-item">⚡ Diseño UI/UX con MUI</ListItem>
                <ListItem className="about-list-item">⚡ Desarrollo Full Stack</ListItem>
              </List>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default About;