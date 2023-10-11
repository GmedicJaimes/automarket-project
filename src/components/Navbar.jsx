import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src="" alt="" />
          <h3>Logo</h3>
        </div>

        <section>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/cars"}>Carros</Link>
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
