import Form from "../../components/FormContact/FormContact";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="se-containerContact">
        <article className="se-art__contact">
          <div className="art-infoContact">
            <h2>Connect with us to find your dream car.</h2>
            <p>
              At AutoMarket, we are dedicated to helping you find the perfect
              car that suits your needs and desires. Our team of automotive
              experts is ready to provide you with an exceptional experience
              from the first moment in that you contact us.
            </p>
          </div>
          <img src="assets/img-contactanos.webp" alt="" />
        </article>

        <article className="article-form">
          <Form />
          <div className="artForm-title">
            <h2>Encuentranos tambien en nuestro punto de venta.</h2>
            <h3>
              Estamos ubicados en la dirección: Av libertadores 15N- 148 local 2
              y 3 Urbanización Niza. <br />
              Diagonal al CAI de Niza.
            </h3>
          </div>
        </article>

        <article className="ubication">
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d987.9538457087299!2d-72.48866773042745!3d7.914344999506819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTQnNTEuNiJOIDcywrAyOScxNi45Ilc!5e0!3m2!1ses-419!2sco!4v1697233945621!5m2!1ses-419!2sco"
            loading="lazy"
          ></iframe>
        </article>
      </section>
    </>
  );
};

export default Contact;
