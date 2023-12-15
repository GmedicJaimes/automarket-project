import "./Necesidad.css";
import img from "../../../public/assets/porsche1.jpg";

const Necesidad = () => {
  return (
    <>
      <section className="se-containerNecesidad">
        <h1>
          We are your best option in the market: more than +100 satisfied
          customers
        </h1>
        <p>Discover the car that matches your identity and personality</p>
        <div className="necesidad-carrusel">
          <article className="necesidad-info">
            <div className="necesidad-card">
              <h1>Luxury Cars</h1>
              <p>
                On our exclusive luxury car page, you'll find an unparalleled
                selection of vehicles from the world's most prestigious brands.
              </p>
              <p>
                From sleek sports cars to luxurious sedans, each model offers
                exceptional design, cutting-edge technology, and extraordinary
                performance
              </p>
              <p>
                Our commitment to excellence is reflected in the personalized
                attention we provide to each client, from expert advice to
                tailor-made financing options. Immerse yourself in the world of
                automotive luxury and discover the unique experience we offer on
                our website
              </p>
            </div>
            <div className="necesidad-cardImg">
              <div className="img-necesidad">
                <img src={img} alt="image-one" />
              </div>
            </div>
          </article>
          <article className="cardNecesidad">
            <h2>
              In AutoMotors, we are committed <br />
              to listening and meeting what the customer needs.
            </h2>
          </article>
        </div>
      </section>
    </>
  );
};

export default Necesidad;
