import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_2qrjqvw";
    const templateId = "template_mcs0kil";
    const apikey = "sBFwvp9y4MJkxDaIv";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
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
