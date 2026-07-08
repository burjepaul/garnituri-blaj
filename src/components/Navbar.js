import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        GarnituriPRO
      </div>

      <ul>

        <li>
          <Link to="/">Acasă</Link>
        </li>

        <li>
          <Link to="/products">Produse</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;