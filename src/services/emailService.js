import emailjs from 'emailjs-com';

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAIL_USER_ID;

console.log('Service ID:', serviceId);
console.log('Template ID:', templateId);
console.log('User ID:', userId);

export const sendEmail = (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    time: new Date().toLocaleString(), // Añadir el parámetro 'time'
  };

  console.log('Template Params:', templateParams);

  return emailjs.send(serviceId, templateId, templateParams, userId)
    .then(response => {
      console.log('EmailJS Response:', response);
      return response;
    })
    .catch(error => {
      console.error('EmailJS Error:', error);
      throw error;
    });
};