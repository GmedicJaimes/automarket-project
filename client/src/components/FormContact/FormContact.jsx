import "./FormContact.css";
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
    <div className="form-container-principal">
      <article className="form-article-first">
        <h1>Select the car of your dreams</h1>
        <p>
          Don't wait any longer to buy the car of your dreams! Act now and make
          that dream come true! Let me help you reach that goal!
        </p>
      </article>
      <article className="form-article-second">
        <form
          action=""
          onSubmit={handleSubmit}
          ref={refForm}
          className="form-container"
        >
          <div className="form-title">
            <h2>Contact Us</h2>
          </div>
          <div className="form-secciones">
            <input type="text" placeholder="Name" required name="name" />

            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
            />

            <input
              type="text"
              placeholder="Cell Number"
              required
              name="number"
            />

            <textarea
              type="text"
              placeholder="Leave your comment here"
              name="message"
            />
          </div>
          <button>Submit</button>
        </form>
      </article>
    </div>
  );
};

export default Form;
