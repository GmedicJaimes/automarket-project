import { Link } from "react-router-dom";
import img from "../assets/Screenshot_4.jpg";

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
              <Link to={"/cars"}>Cars</Link>
            </li>
            <li>
              <Link to={"/informe"}>Services</Link>
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
