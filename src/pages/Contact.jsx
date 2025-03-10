import { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Contáctame 📩</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
        <Button text="Enviar Mensaje" type="submit" className="w-full" />
      </form>
    </section>
  );
};

export default Contact;
