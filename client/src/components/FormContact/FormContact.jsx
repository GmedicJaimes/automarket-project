import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    // previene que la pagina se recargue al enviar el formulario
    event.preventDefault();

    // identificadores necesarios para el servicio , plantilla de EmailJS y clave API para el envio del formulario
    const serviceId = "service_2qrjqvw";
    const templateId = "template_mcs0kil";
    const apikey = "sBFwvp9y4MJkxDaIv";

    emailjs
      // se usa el metodo sendForm de EmailJS para enviar el formulario
      .sendForm(serviceId, templateId, refForm.current, apikey)
      // Si el envio es exitoso, se registra el texto del resultado en la consola y se restable el formulario
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      // Si sucede un error en el envio, se registra el error en la consola
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        ref={refForm}
        className="form-container"
      >
        <div className="form-title">
          <h2>Contáctenos</h2>
        </div>
        <div className="form-secciones">
          <label htmlFor="">
            <span>*</span> Nombre
          </label>
          <input type="text" placeholder="Rodrigo Perez" required name="name" />

          <label htmlFor="">
            <span>*</span> Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            name="email"
          />

          <label htmlFor="">
            <span>*</span> Teléfono de contacto
          </label>
          <input
            type="text"
            placeholder="+57 320-0000444"
            required
            name="number"
          />

          <label htmlFor="">Comentarios</label>
          <textarea
            type="text"
            placeholder="Deja tu comentario aqui"
            name="message"
          />
        </div>
        <button>Enviar </button>
      </form>
    </>
  );
};

export default Form;
