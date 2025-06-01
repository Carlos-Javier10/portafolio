import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  { text: 'Inicio', to: '/' },
  // { text: 'Sobre mí', to: '/about' },
  // { text: 'Proyectos', to: '/projects' },
  { text: 'Contacto', to: '/contact' },
  // { text: 'Blog', to: '/blog' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#23272f', boxShadow: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo y nombre en desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <img src="/icon2.svg" alt="Logo" style={{ height: 36, width: 36, minWidth: 36 }} />
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                ml: 1,
                fontWeight: 700,
                letterSpacing: 1,
                color: '#fff',
                textDecoration: 'none',
                fontSize: 22,
              }}
            >
              Carlos Guagrilla
            </Typography>
          </Box>
          {/* Menú hamburguesa en mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu} component={RouterLink} to={page.to}>
                  <Typography sx={{ textAlign: 'center' }}>{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo y nombre en mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1.5 }}>
            <img src="/icon2.svg" alt="Logo" style={{ height: 36, width: 36, minWidth: 36 }} />
            <Typography
              variant="h5"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                ml: 1,
                fontWeight: 700,
                letterSpacing: 1,
                color: '#fff',
                textDecoration: 'none',
                fontSize: 20,
              }}
            >
              Carlos Guagrilla
            </Typography>
          </Box>
          {/* Menú de páginas en desktop alineado a la derecha */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, ml: 'auto' }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                component={RouterLink}
                to={page.to}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 500, fontSize: 18, '&:hover': { color: '#1e88e5' } }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;