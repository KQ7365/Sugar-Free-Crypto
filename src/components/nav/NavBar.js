import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <ul className="navbar">
        <li className="navbar-item">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-item" to="/education">
            Education
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-item" to="/cryptocurrencies">
            Cryptocurrencies
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-item" to="/portfolio">
            Favorites
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-item" to="/login">
            LOGOUT
          </Link>
        </li>
      </ul>
    </header>
  );
};
