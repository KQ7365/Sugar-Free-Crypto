import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePageHTML = () => {
  return (
    <section className="card-parent-div">
      <div className="card">
        <img
          src="crypto-education-icon.png"
          className="card-img-top"
          alt="logo"
        ></img>
        <div className="card-body">
          <h1 className="card-title">Education</h1>
          <p className="card-text">Learn about Cryptocurrency</p>
          <Link to="education" className="link-theme">
            Education Page
          </Link>
        </div>
      </div>

      <div className="card">
        <img src="briefcase.png" className="card-img-top" alt="logo"></img>
        <div className="card-body">
          <h1 className="card-title">Favorites Dashboard</h1>
          <p className="card-text">Manage your Cryptocurrencies</p>
          <Link to="portfolio" className="link-theme">
            Favorites
          </Link>
        </div>
      </div>

      <div className="card">
        <img
          src="digital-currency-list.png"
          className="card-img-top"
          alt="logo"
        ></img>
        <div className="card-body">
          <h1 className="card-title">Cryptocurrencies</h1>
          <p className="card-text">See all Cryptocurrencies available</p>

          <Link to="/cryptocurrencies" className="link-theme">
            Cryptocurrency List
          </Link>
        </div>
      </div>
    </section>
  );
};
