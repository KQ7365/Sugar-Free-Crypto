import { getAllCryptoTokens } from "./services/cryptoToken";
import "./App.css";
import { useEffect, useState } from "react";
import { CryptoCurrencyList } from "./components/cryptocurrencies/CryptoCurrencyList";

export const App = () => {
  const [allTokenTickers, setAllTokenTickers] = useState([]);
  const [justBTCPrice, setJustBTCPrice] = useState([]);

  useEffect(() => {
    getAllCryptoTokens().then((tickerArr) => {
      setAllTokenTickers(tickerArr);
      console.log(tickerArr);
    });
  }, []);

  useEffect(() => {
    const justBTCTicker = allTokenTickers.find((btc) => btc.target === "USD");
    setJustBTCPrice(justBTCTicker);
  }, [allTokenTickers]);

  const formatPriceWithCommas = (price) => {
    return price?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getAllCryptoTokens().then((tickerArr) => {
        setAllTokenTickers(tickerArr);
      });
    }, 60000); // Update the price every 60 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <body className="App">
      <header className="App-header">
        <p>Hello World</p>
        {justBTCPrice && (
          <div key={justBTCPrice.ticker}>
            <p>
              Current price of BTC: ${formatPriceWithCommas(justBTCPrice?.last)}
            </p>
          </div>
        )}
        <CryptoCurrencyList />
      </header>

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
            <a
              href="https://www.investor.gov/additional-resources/spotlight/crypto-assets?utm_source=google&utm_medium=cpc&utm_campaign=dae&utm_content=search&gclid=EAIaIQobChMIl43D9JORgQMV_zHUAR0tfAPdEAAYAiAAEgJonPD_BwE"
              className="link-theme"
              target="_blank"
            >
              Education Page
            </a>
          </div>
        </div>

        <div className="card">
          <img src="briefcase.png" className="card-img-top" alt="logo"></img>
          <div className="card-body">
            <h1 className="card-title">Portfolio</h1>
            <p className="card-text">Manage your Cryptocurrencies</p>
            <a href="" className="link-theme" target="_blank">
              Portfolio
            </a>
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
            <a href="" className="link-theme" target="_blank">
              Cryptocurrency List
            </a>
          </div>
        </div>
      </section>
    </body>
  );
};

export default App;
