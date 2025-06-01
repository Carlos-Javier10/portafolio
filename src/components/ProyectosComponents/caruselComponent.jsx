import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiMui,
  SiMysql,
  SiGithub,
  SiFastapi,
  SiExpress,
  SiNextdotjs,
  SiCloudflare,
} from "react-icons/si";

const techIcons = [
  { icon: <SiJavascript color="#f7df1e" />, name: "JavaScript" },
  { icon: <SiPython color="#3776AB" />, name: "Python" },
  { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
  { icon: <SiReact color="#61dafb" />, name: "React" },
  { icon: <SiNextdotjs color="#fff" />, name: "Next.js" },
  { icon: <SiCloudflare color="#f38020" />, name: "Cloudflare" },
  { icon: <SiDocker color="#2496ed" />, name: "Docker" },
  { icon: <SiMui color="#007fff" />, name: "Material UI" },
  { icon: <SiMysql color="#00758f" />, name: "MySQL" },
  { icon: <SiGithub color="#fff" />, name: "GitHub" },
  { icon: <SiFastapi color="#009688" />, name: "FastApi" },
  { icon: <SiExpress color="#fff" />, name: "Express" },
];

const CaruselComponent = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  // Responsive: menos íconos en pantallas pequeñas
  const getVisibleCount = () => {
    return 6; // Siempre mostrar solo 4 iconos
  };
  const [visible, setVisible] = useState(getVisibleCount());
  const total = techIcons.length;

  useEffect(() => {
    const handleResize = () => setVisible(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cambia el índice con una transición suave
  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setIsTransitioning(false);
    }, 500);
  };
  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setIsTransitioning(false);
    }, 500);
  };

  const getVisibleIcons = () => {
    let arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(techIcons[(index + i) % total]);
    }
    return arr;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % total);
        setIsTransitioning(false);
      }, 500);
    }, 8500); // Cambiado a 8.5 segundos (3.5 + 5)
    return () => clearInterval(interval);
  }, [total]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb={4}
      width="100%"
    >
      <Box
        width="100%"
        maxWidth={900}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <IconButton onClick={handlePrev} aria-label="anterior" size="large">
          <ArrowBackIos sx={{ color: "#1e88e5" }} />
        </IconButton>
        <Box
          display="flex"
          gap={{ xs: 2, sm: 4, md: 5 }}
          px={{ xs: 1, sm: 2, md: 3 }}
          width="100%"
          justifyContent="center"
          sx={{
            transition: 'opacity 0.6s cubic-bezier(.4,2,.6,1)',
            opacity: isTransitioning ? 0.2 : 1,
            flexWrap: 'nowrap',
            overflowX: { xs: 'auto', md: 'visible' },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {getVisibleIcons().map((tech, i) => (
            <Box
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                transition: 'transform 0.6s cubic-bezier(.4,2,.6,1), box-shadow 0.6s cubic-bezier(.4,2,.6,1), opacity 0.6s cubic-bezier(.4,2,.6,1)',
                transform: isTransitioning ? 'scale(0.85) rotate(-8deg)' : 'scale(1)',
                opacity: isTransitioning ? 0.5 : 1,
                minWidth: 96, // aumentado
                minHeight: 110, // nuevo: más alto
                boxShadow: isTransitioning ? 6 : 3,
                '&:hover': {
                  transform: 'scale(1.18) rotate(6deg)',
                  opacity: 0.95,
                  boxShadow: 12,
                  background: 'rgba(30,136,229,0.08)',
                  borderRadius: 2,
                },
                maxWidth: { xs: 120, sm: 140, md: 160 }, // aumentado
                maxHeight: { xs: 120, sm: 140, md: 160 }, // nuevo
                cursor: 'pointer',
                p: { xs: 1.5, sm: 2 }, // padding extra
                background: 'rgba(30,30,30,0.7)', // leve fondo para resaltar
                borderRadius: 3,
              }}
            >
              <Box fontSize={{ xs: 48, sm: 64, md: 80 }}>
                {tech.icon}
              </Box>
              <Typography variant="caption" color="#fff" fontSize={{ xs: 13, sm: 15, md: 16 }} textAlign="center">
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <IconButton onClick={handleNext} aria-label="siguiente" size="large">
          <ArrowForwardIos sx={{ color: "#1e88e5" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CaruselComponent;
