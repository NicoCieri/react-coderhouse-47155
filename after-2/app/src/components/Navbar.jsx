import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <nav>
        <h1>
          <Link to="/">MercadoCoder</Link>
        </h1>

        <ul>
          <li>
            <NavLink to="/category/phones">Teléfonos</NavLink>
          </li>
          <li>
            <NavLink to="/category/tablets">Tablets</NavLink>
          </li>
          <li>
            <NavLink to="/category/notebooks">Notebooks</NavLink>
          </li>
        </ul>
      </nav>

      <div>CartWidget</div>
    </div>
  );
};

export default Navbar;
