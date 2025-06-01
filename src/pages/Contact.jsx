import React, { useState } from "react";
import { Button } from '@mui/base/Button';
import { sendEmail } from '../services/emailService';
import { Box, TextField, CircularProgress, Typography } from '@mui/material';
import { LoadingContext } from "../context/LoadingContext";

const Contact = () => {
  const { isLoaded, setIsLoaded } = React.useContext(LoadingContext);
  React.useEffect(() => { setIsLoaded(true); }, [setIsLoaded]);
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  if (!isLoaded) return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="60vh">
      <CircularProgress color="primary" />
      <Typography variant="body1" mt={2}>Cargando...</Typography>
    </Box>
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje, por favor intenta nuevamente.');
      });
  };

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
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <h1 className="text-3xl font-bold" style={{ textAlign: 'center' }}>Contáctame 📩</h1>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 500,
          mx: 'auto',
          background: 'rgba(30,30,30,0.8)',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          label="Nombre"
          variant="filled"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 1,
              border: '1px solid #444',
            },
            '& .MuiInputLabel-root': {
              color: '#bbb',
            },
            '& .MuiFilledInput-input': {
              color: '#fff',
            },
          }}
        />
        <TextField
          label="Correo Electrónico"
          variant="filled"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 1,
              border: '1px solid #444',
            },
            '& .MuiInputLabel-root': {
              color: '#bbb',
            },
            '& .MuiFilledInput-input': {
              color: '#fff',
            },
          }}
        />
        <TextField
          label="Mensaje"
          variant="filled"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          minRows={4}
          sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 1,
              border: '1px solid #444',
            },
            '& .MuiInputLabel-root': {
              color: '#bbb',
            },
            '& .MuiFilledInput-input': {
              color: '#fff',
            },
          }}
        />
        <Button type="submit" style={{ background: '#1976d2', color: '#fff', padding: '0.75rem', borderRadius: 6, fontWeight: 600, fontSize: '1rem' }}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;