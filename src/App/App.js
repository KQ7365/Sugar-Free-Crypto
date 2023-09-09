import { getAllCryptoTokens } from "../services/cryptoToken";
import "./App.css";
import { useEffect, useState } from "react";
import { CryptoCurrencyList } from "../components/cryptocurrencies/CryptoCurrencyList";
import { HomePageHTML } from "../components/homepage/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";

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
    <Routes>
      <Route path="/" element={<HomePageHTML />} />

      <Route path="/cryptocurrencies" element={<CryptoCurrencyList />} />
    </Routes>
  );
};

export default App;

{
  /* <body className="App">
<header className="App-header">
  <p>Hello World</p>
  {justBTCPrice && (
    <div key={justBTCPrice.ticker}>
      <p>
        Current price of BTC: ${formatPriceWithCommas(justBTCPrice?.last)}
      </p>
    </div>
  )}
    </header>
      <section></section>
      </section>
    </body> */
}
