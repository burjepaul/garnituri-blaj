import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../src/assets/logo-garstar.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="GARstar SRL" />
        </Link>

        {/* MENU */}
        <ul className="navbar-menu">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              end
            >
              Acasă
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Produse
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* CTA */}
        <Link to="/contact" className="navbar-cta">
          Cere o ofertă
          <span>→</span>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;