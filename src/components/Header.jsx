import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import '../styles/headerStyle.css'; // Importa el archivo CSS

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = [
    { text: 'Inicio', to: '/' },
    { text: 'Sobre mí', to: '/about' },
    { text: 'Proyectos', to: '/projects' },
    { text: 'Contacto', to: '/contact' },
    { text: 'Blog', to: '/blog' },
  ];
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#23272f', boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/icon2.svg" alt="Logo" style={{ height: 36, width: 36, minWidth: 36 }} />
            <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1, color: '#fff', display: isMobile ? 'none' : 'block' }}>Carlos Guagrilla</span>
          </div>
          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div className="menu-area" style={{ display: 'flex', gap: 32 }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  component={RouterLink}
                  to={item.to}
                  color="#fff"
                  underline="none"
                  sx={{ fontSize: 18, fontWeight: 500, '&:hover': { color: '#1e88e5' } }}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={220} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} component={RouterLink} to={item.to}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Header;