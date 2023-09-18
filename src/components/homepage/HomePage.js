import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePageHTML = () => {
  return (
    <main>
      <div className="header-container">
        <h1 className="headText">
          Sugar Free Crypto <span className="changeMe">Launchpad</span>
        </h1>
        <img
          className="mainIMG"
          alt="cyber img"
          src="cyberpunk-education.png"
        />
      </div>
      <section className="card-parent-div">
        <div className="card">
          <img
            src="cyberpunk-bitcoin-resources-mining.png"
            className="card-img-top"
            alt="logo"
          ></img>
          <div className="card-body">
            <h1 className="card-title">Resources</h1>
            <p className="card-text">Research about Cryptocurrency</p>
            <Link to="education" className="link-theme">
              Resources Page
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="cyberpunk-bitcoin-macine.png"
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
        <div className="cardMain">
          <img
            src="cyberpunk-bitcoin-collection-coins.png"
            className="card-img-top"
            alt="logo"
          ></img>
          <div className="card-body">
            <h1 className="card-title">Favorites</h1>
            <p className="card-text">Manage all your Cryptocurrency Items</p>
            <Link to="portfolio" className="link-theme">
              Favorites
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
