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
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section>
        <article></article>
        <form action="" onSubmit={handleSubmit} ref={refForm}>
          <div>
            <h2>Contactanos</h2>
          </div>
          <fieldset>
            <label htmlFor="">
              <span>*</span>Nombre
            </label>
            <input type="text" placeholder="Rodrigo Perez" />
          </fieldset>
          <fieldset>
            <label htmlFor="">
              <span>*</span>Correo Electrónico
            </label>
            <input type="text" placeholder="example@gmail.com" />
          </fieldset>
          <fieldset>
            <label htmlFor="">
              <span>*</span>Teléfono de contacto
            </label>
            <input type="text" placeholder="320-0000444" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Comentarios</label>
            <textarea type="text" placeholder="Deja tu comentario aqui" />
          </fieldset>
          <button>Enviar </button>
        </form>
      </section>
    </>
  );
};

export default Form;
