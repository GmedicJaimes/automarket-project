import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8041/8041337.png"
            alt=""
          />
          <h3>
            <span>AUTO</span>MARKET
          </h3>
        </div>

        <section className="nav-sectionOptions">
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/cars"}>Servicios</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contactanos</Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
