import { useEffect, useState } from "react";
import "./Cryptocurrencies.css";
import { cryptoCurrencyPost } from "../../services/CryptoCurrencyPost";

export const CryptoCurrencyList = ({ currentUser }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8088/list");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCryptocurrencies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToFavoritesButton = (item) => {
    cryptoCurrencyPost(item);
  };

  return (
    <main>
      <div className="header-container">
        <h1 className="headText">Available Crypto </h1>
        <img className="mainIMG" alt="cyber img" src="other.png" />
      </div>
      <div className="forNow">
        {cryptocurrencies.map((crypto) => (
          <div className="eachCryptoItem" key={crypto.name}>
            <h3>{crypto.name}</h3>
            <p className="eachPrice"> Price: {crypto.price}</p>
            <button
              className="login-btn btn-info"
              onClick={() => {
                handleAddToFavoritesButton(crypto);
                alert("🚀NEW CRYPTO ADDED🚀");
              }}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
