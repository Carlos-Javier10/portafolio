import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Container, Divider, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { LoadingContext } from "../context/LoadingContext";

const About = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => { setIsLoaded(true); }, [setIsLoaded]);
  const handleItemClick = (item) => setSelectedItem(item);
  if (!isLoaded) return <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh"><Typography>Cargando...</Typography></Box>;
  const experienceItems = [
    { title: "Pasante de Desarrollo Web - Universidad de las Americas", description: "Descripción de la experiencia en la Universidad de las Americas." },
    { title: "Pasante de IT - Tababela Cargo Center S.A.", description: "Descripción de la experiencia en Tababela Cargo Center S.A." },
    { title: "Pasante de Desarrollo Web - Pronavalle", description: "Descripción de la experiencia en Pronavalle." },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        background: 'linear-gradient(135deg, #232526 0%,rgb(0, 0, 0) 100%)',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Izquierda */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <Avatar src="/icon2.svg" sx={{ width: 140, height: 140, mb: 2 }} />
              <Typography variant="h6" fontWeight={700} color="#fff">Carlos</Typography>
              <Typography variant="body2" color="#bdbdbd">Desarrollador Web</Typography>
              <Divider sx={{ width: '100%', my: 2, bgcolor: '#1e88e5' }} />
              <Typography variant="body2" color="#bdbdbd">📧 carlos.guagrilla@hotmail.com</Typography>
              <Typography variant="body2" color="#bdbdbd">🔗 www.linkedin.com/in/carlos-javier-guagrilla-chicaiza-30500a1a4</Typography>
            </Box>
          </Grid>
          {/* Derecha */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3, bgcolor: '#23272f', color: '#fff' }}>
              <Typography variant="h5" fontWeight={700} color="#1e88e5" mb={1}>Sobre Mí 👨‍💻</Typography>
              <Typography variant="body1">Soy un desarrollador apasionado por la tecnología y la creación de experiencias digitales. Me especializo en el desarrollo web y siempre estoy en busca de nuevos retos.</Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3, bgcolor: '#23272f', color: '#fff' }}>
              <Typography variant="h5" fontWeight={700} color="#1e88e5" mb={1}>Habilidades 🚀</Typography>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={4}><List dense><ListItem sx={{ p: 0 }}>⚡ JavaScript</ListItem><ListItem sx={{ p: 0 }}>⚡ Python</ListItem><ListItem sx={{ p: 0 }}>⚡ Node js</ListItem></List></Grid>
                <Grid item xs={6} sm={4}><List dense><ListItem sx={{ p: 0 }}>⚡ React - Next</ListItem><ListItem sx={{ p: 0 }}>⚡ Docker</ListItem><ListItem sx={{ p: 0 }}>⚡ Material UI</ListItem></List></Grid>
                <Grid item xs={12} sm={4}><List dense><ListItem sx={{ p: 0 }}>⚡ MySQL</ListItem><ListItem sx={{ p: 0 }}>⚡ GitHub</ListItem><ListItem sx={{ p: 0 }}>⚡ FastApi</ListItem><ListItem sx={{ p: 0 }}>⚡ Express</ListItem></List></Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3, bgcolor: '#23272f', color: '#fff' }}>
              <Typography variant="h5" fontWeight={700} color="#1e88e5" mb={1}>Educación 🎓</Typography>
              <List dense>
                <ListItem sx={{ p: 0 }}>🎓 Ingeniería en Sistemas - Universidad de las Americas (estudiante)</ListItem>
                <ListItem sx={{ p: 0 }}>🎓 Tecnólogo Superior en Análisis de Sistemas</ListItem>
              </List>
            </Paper>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3, bgcolor: '#23272f', color: '#fff' }}>
              <Typography variant="h5" fontWeight={700} color="#1e88e5" mb={1}>Experiencia Laboral 💼</Typography>
              <List dense>
                {experienceItems.map((item, index) => (
                  <ListItem key={index} onClick={() => handleItemClick(item)} sx={{ p: 0, cursor: 'pointer', '&:hover': { color: '#1e88e5' } }}>{item.title}</ListItem>
                ))}
              </List>
            </Paper>
            {selectedItem && (
              <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, mb: 3, bgcolor: '#1e88e5', color: '#fff' }}>
                <Typography variant="h6" fontWeight={700}>{selectedItem.title}</Typography>
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