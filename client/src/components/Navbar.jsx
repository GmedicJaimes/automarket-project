import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1965/1965845.png"
            alt=""
          />
          <h3>
            <span>Auto</span>Motors
          </h3>
        </div>

        <section className="nav-sectionOptions">
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/cars"}>Catalogo</Link>
            </li>
            <li>
              <Link to={"/informe"}>Servicios</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </section>

        {/* <section>
          <button>Login</button>
        </section> */}
      </nav>
    </header>
  );
};

export default Navbar;
