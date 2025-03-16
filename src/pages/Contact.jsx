import React, { useState } from "react";
import { Button } from '@mui/base/Button';
import { sendEmail } from '../services/emailService';
import '../styles/contactStyle.css'; // Importa el archivo CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
    <section className="p-10 text-center">
      <h1 className="text-3xl font-bold">Contáctame 📩</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows="4"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        ></textarea>
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
};

export default Contact;