import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
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
        {localStorage.getItem("crypto_user") ? (
          <li className="navbar-item">
            <Link
              className="navbar-item"
              to="/login"
              onClick={() => {
                localStorage.removeItem("crypto_user");
                navigate("/login", { replace: true });
              }}
            >
              LOGOUT
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
};
