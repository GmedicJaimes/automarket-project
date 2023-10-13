import Form from "../components/FormContact";

const Contact = () => {
  return (
    <>
      <section className="se-containerContact">
        <article className="se-art__contact">
          <div className="art-infoContact">
            <h2>Conecta con Nosotros para Encontrar tu Auto de ensueño.</h2>
            <p>
              En AutoMarket, estamos dedicados a ayudarte a encontrar el
              automóvil perfecto que se adapte a tus necesidades y deseos.
              Nuestro equipo de expertos en automóviles está listo para
              brindarte una experiencia excepcional desde el primer momento en
              que nos contactes.
            </p>
          </div>
          <img
            src="https://www.autoscolombia.co/wp-content/uploads/2021/12/CONTACTANOS.jpg"
            alt=""
          />
        </article>

        <article>
          <Form />
        </article>
      </section>
    </>
  );
};

export default Contact;
