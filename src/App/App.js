import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "../views/Authorized";
import { ApplicationViews } from "../views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          //checking if user authorized
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
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
