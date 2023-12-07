import { Link } from "react-router-dom";
import "./footer.css";
import img from "../../assets/Screenshot_4.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="se-footerInfo">
          <img src={img} alt="" />
          <div className="texto-footer">
            <p>
              Fulfill the dream of having your own vehicle, with AutoMotors. We
              are leaders in the market for buying and selling high-end vehicles
              in the United Kingdom, we have personalized support, generating a
              unique experience when choosing your ideal car!
            </p>
          </div>
          <div className="datos-footer">
            <p>
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384095.png"
                alt=""
              />
              +44 20 5129 4591
            </p>
            <p>
              100 The Quays, Salford <br /> United Kingdom
            </p>
          </div>
        </section>
        <section className="se-footerDerechos">
          <p>Copyright © 2023 AutoMotors</p>
          <p>
            Developed by{" "}
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
