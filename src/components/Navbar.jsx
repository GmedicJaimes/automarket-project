import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttCtth6humrgzNNUMgWpW-tWFf30Sq3AYG-BuxS1Vq_UPlNeZd78exaRZwHbPM39xG8Y&usqp=CAU"
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
      </nav>
    </header>
  );
};

export default Navbar;
