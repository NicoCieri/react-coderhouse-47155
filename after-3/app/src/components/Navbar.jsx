import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <nav>
        <h1>
          <Link to="/">MercadoCoder</Link>
        </h1>

        <ul>
          <li>
            <NavLink to="/category/smartphones">Teléfonos</NavLink>
          </li>
          <li>
            <NavLink to="/category/tablets">Tablets</NavLink>
          </li>
          <li>
            <NavLink to="/category/notebooks">Notebooks</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </div>
  );
};

export default Navbar;
