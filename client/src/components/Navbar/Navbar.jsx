import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src="/assets/Screenshot_4.jpg" alt="" />
          <h3>
            <a href="/">
              <span>Auto</span>Motors
            </a>
          </h3>
        </div>

        <section className="nav-sectionOptions">
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/services">Services</RouterLink>
            </li>
            <li>
              <RouterLink to="car-shop">Cars</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">Contact Us</RouterLink>
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
