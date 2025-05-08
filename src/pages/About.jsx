import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Container, Divider, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { LoadingContext } from "../context/LoadingContext"; 
import "../styles/aboutStyle.css"; 

const About = () => {
  // Accedemos al contexto de carga
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);

  // Estado para controlar el item seleccionado
  const [selectedItem, setSelectedItem] = useState(null);

  // Usamos useEffect para marcar como cargado cuando el componente se monte
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  // Manejar clic en los ListItem
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Si aún no está cargado, mostramos un mensaje de carga
  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  // Datos de los items de experiencia laboral
  const experienceItems = [
    { title: "Pasante de Desarrollo Web - Universidad de las Americas", description: "Descripción de la experiencia en la Universidad de las Americas." },
    { title: "Pasante de IT - Tababela Cargo Center S.A.", description: "Descripción de la experiencia en Tababela Cargo Center S.A." },
    { title: "Pasante de Desarrollo Web - Pronavalle", description: "Descripción de la experiencia en Pronavalle." },
  ];

  return (
    <Box className="about-container">
      <Container className="about-container-inner about-p-10">
        <Grid container spacing={3}>
          {/* Sección Izquierda (Foto + Datos) */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src="https://drive.google.com/file/d/1TlhnaT1KAFvcBJI_jsfoiwPex35pe8VH/view?usp=sharing"
                className="about-avatar"
                sx={{ width: 176, height: 176 }}
              />
              <Typography variant="h6" className="about-typography">
                Carlos
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
                🔗 www.linkedin.com/in/carlos-javier-guagrilla-chicaiza-30500a1a4
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
                  {experienceItems.map((item, index) => (
                    <ListItem
                      key={index}
                      className="about-list-item"
                      button
                      onClick={() => handleItemClick(item)}
                    >
                      {item.title}
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </Paper>

            {selectedItem && (
              <Paper className="about-paper about-slide-down">
                <Typography variant="h5">{selectedItem.title}</Typography>
                <Typography variant="body1">{selectedItem.description}</Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;