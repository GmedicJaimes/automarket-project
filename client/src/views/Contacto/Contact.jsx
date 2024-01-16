import Form from "../../components/FormContact/FormContact";
import Ubication from "../../components/UbicationContact/UbicationContact";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init({});

  return (
    <>
      <section className="se-containerContact">
        <article
          className="se-art__contact"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="art-infoContact">
            <h2>
              Connect with us to find <span>your dream car.</span>
            </h2>
            <p>
              At AutoMarket, we are dedicated to helping you find the perfect
              car that suits your needs and desires. Our team of automotive
              experts is ready to provide you with an exceptional experience
              from the first moment in that you contact us.
            </p>
          </div>
          <img src="assets/vendedor-de-autos.jpg" alt="" />
        </article>
      </section>
      <article className="principal-ubication">
        <Ubication />
      </article>
      <Form />
    </>
  );
};

export default Contact;
