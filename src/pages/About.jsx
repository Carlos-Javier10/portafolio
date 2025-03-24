import React, { useContext, useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { LoadingContext } from "../context/LoadingContext"; 
import "../styles/aboutStyle.css"; 

const About = () => {
  // Accedemos al contexto de carga
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  // Usamos useEffect para marcar como cargado cuando el componente se monte
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  return (
    <Box className="about-container">
      <Container className="about-container-inner about-p-10">
        <Grid container spacing={3}>
          {/* Sección Izquierda (Foto + Datos) */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src="https://scontent.fuio32-1.fna.fbcdn.net/v/t39.30808-6/395674789_3064542830344551_3933529025567890336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHWmubFyphlvYSTUDRVa8bK_woNqGbZbgL_Cg2oZtluAmk5bKfifNJODLvVnGMLwRll9yjBXC2oFLOgLtivahVX&_nc_ohc=dtzgsuLSrfwQ7kNvgERUxTU&_nc_zt=23&_nc_ht=scontent.fuio32-1.fna&_nc_gid=WsOcfr4t-tzDXV3FsQ6Czg&oh=00_AYHpbA2C5piOFclC1H4exh5qHmOiW-GoKB1uEaJcc9nTdQ&oe=67E6913B"
                className="about-avatar"
                sx={{ width: 176, height: 176 }}
              />
              <Typography variant="h6" className="about-typography">
                Carlo
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="about-typography"
              >
                Desarrollador Web
              </Typography>
              <Divider className="about-divider" />
              <Typography variant="body2" className="about-typography">
                📧 carlos.guagrilla@hotmail.com
              </Typography>
              <Typography variant="body2" className="about-typography">
                🔗
                www.linkedin.com/in/carlos-javier-guagrilla-chicaiza-30500a1a4
              </Typography>
            </Box>
          </Grid>

          {/* Sección Derecha (Información) */}
          <Grid item xs={12} md={8}>
            <Paper className="about-paper">
              <Typography variant="h5">Sobre Mí 🧑‍💻</Typography>
              <Typography variant="body1">
                Soy un desarrollador apasionado por la tecnología y la creación
                de experiencias digitales. Me especializo en el desarrollo web y
                siempre estoy en busca de nuevos retos.
              </Typography>
            </Paper>

            <Paper className="about-paper">
              <Typography variant="h5">Habilidades 🚀</Typography>
              <List>
                <ListItem className="about-list-item">⚡ JavaScript</ListItem>
                <ListItem className="about-list-item">⚡ Python</ListItem>
                <ListItem className="about-list-item">⚡ Node js</ListItem>
                <ListItem className="about-list-item">⚡ React - Next</ListItem>
              </List>
              <List>
                <ListItem className="about-list-item">⚡ Docker</ListItem>
                <ListItem className="about-list-item">⚡ Material UI</ListItem>
                <ListItem className="about-list-item">⚡ MySQL</ListItem>
                <ListItem className="about-list-item">⚡ GitHub</ListItem>
              </List>
              <List>
                <ListItem className="about-list-item">⚡ FastApi</ListItem>
                <ListItem className="about-list-item">⚡ Express</ListItem>
              </List>
            </Paper>

            <Paper className="about-paper">
              <Typography variant="h5">Educación 🎓</Typography>
              <Typography variant="body1">
                <List>
                  <ListItem className="about-list-item">
                    🎓 Ingeniería en Sistemas - Universidad de las Americas (estudiante)
                  </ListItem>
                </List>
                <List >
                  <ListItem className="about-list-item">
                    🎓 Tecnologo Superior en Analisis de Sistemas
                  </ListItem>
                </List>
              </Typography>
            </Paper>
            <Paper className="about-paper">
              <Typography variant="h5">Experiencia Laboral 💼</Typography>
              <Typography variant="body1">
                <List>
                  <ListItem className="about-list-item">
                    💼 Pasante de Desarrollo Web - Universidad de las Americas
                  </ListItem>
                </List>
                <List>
                  <ListItem className="about-list-item">
                    💼 Pasante de IT - Tababela Cargo Center S.A.
                  </ListItem>
                </List>
                <List>
                  <ListItem className="about-list-item">
                    💼 Pasante de Desarrollo Web - Pronavalle
                  </ListItem>
                </List>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
