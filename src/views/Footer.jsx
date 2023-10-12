import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="se-footerInfo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttCtth6humrgzNNUMgWpW-tWFf30Sq3AYG-BuxS1Vq_UPlNeZd78exaRZwHbPM39xG8Y&usqp=CAU"
            alt=""
          />
          <div className="texto-footer">
            <p>
              ¡Cumple el sueño de tener vehículo propio, con AutoMarket. Somos
              líderes en el mercado de compra y venta de vehículos en Cúcuta,
              contamos con acompañamiento personalizado, generando experiencias
              únicas de negocio!
            </p>
          </div>
          <div className="datos-footer">
            <p>+57 302 5129591</p>
            <p>direccion tal: cucuta</p>
          </div>
        </section>
        <section className="se-footerDerechos">
          <p>Copyright © 2023 AutoMarket</p>
          <p>
            Desarrollado por{" "}
            <a href="https://gullianojaimes.vercel.app/" target="_blank">
              Gulliano Jaimes
            </a>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
