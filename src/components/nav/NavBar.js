import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/education">Education</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio">My Portfolio</Link>
        </li>
      </ul>
    </header>
  );
};
