import { getAllCryptoTokens } from "../services/cryptoToken";
import "./App.css";
import { useEffect, useState } from "react";
import { CryptoCurrencyList } from "../components/cryptocurrencies/CryptoCurrencyList";
import { HomePageHTML } from "../components/homepage/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { EducationList } from "../components/education/EducationList";
import { MyPortfolio } from "../components/portfolio/MyPortfolio";
import { LoginPage } from "../components/login/LoginPage";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<HomePageHTML />} />
        <Route path="/education" element={<EducationList />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencyList />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;

// const [allTokenTickers, setAllTokenTickers] = useState([]);
// const [justBTCPrice, setJustBTCPrice] = useState([]);

// useEffect(() => {
//   getAllCryptoTokens().then((tickerArr) => {
//     setAllTokenTickers(tickerArr);
//     console.log(tickerArr);
//   });
// }, []);

// useEffect(() => {
//   const justBTCTicker = allTokenTickers.find((btc) => btc.target === "USD");
//   setJustBTCPrice(justBTCTicker);
// }, [allTokenTickers]);

// const formatPriceWithCommas = (price) => {
//   return price?.toLocaleString(undefined, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// useEffect(() => {
//   const interval = setInterval(() => {
//     getAllCryptoTokens().then((tickerArr) => {
//       setAllTokenTickers(tickerArr);
//     });
//   }, 60000); // Update the price every 60 seconds

//   return () => {
//     clearInterval(interval);
//   };
// }, []);

// {
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
// }
