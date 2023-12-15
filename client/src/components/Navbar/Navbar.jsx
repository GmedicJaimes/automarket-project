import { Link } from "react-router-dom";
import img from "../../../public/assets/Screenshot_4.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={img} alt="" />
          <h3>
            <a href="/">
              <span>Auto</span>Motors
            </a>
          </h3>
        </div>

        <section className="nav-sectionOptions">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/car-shop"}>Cars</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </section>

        <section className="nav-sectionLogin">
          <button>Login</button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
