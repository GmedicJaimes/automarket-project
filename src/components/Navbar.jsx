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
              <Link to={"perra"}>Inicio</Link>
            </li>
            <li>
              <Link>Contactanos</Link>
            </li>
            <li>
              <Link>Carros</Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
