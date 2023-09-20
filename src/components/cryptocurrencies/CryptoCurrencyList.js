import { useEffect, useState } from "react";
import "./Cryptocurrencies.css";
import { cryptoCurrencyPost } from "../../services/CryptoCurrencyPost";

export const CryptoCurrencyList = ({ currentUser }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CTether%2CBinance%20Coin%2CCardano%2CXRP%2CDogecoin%2CPolkadot%2CUSD%20Coin%2CUniswap%2CLitecoin%2CBitcoin%20Cash%2CSolana%2CChainlink%2CPolygon%2CEthereum%20Classic%2CStellar%2CVeChain%2CFilecoin%2CTerra%2CTHETA%2CWrapped%20Bitcoin%2CDai%2CAave%2CCosmos%2CCrypto.com%20Coin%2CMonero%2CPancakeSwap%2CNEO%2CEOS%2CTRON%2CIOTA%2CFTX%20Token%2CCompound%2CTezos%2CBitTorrent%2CAvalanche%2CKlaytn%2CHuobi%20Token%2CAlgorand%2CBitcoin%20SV%2COKB%2CHedera%20Hashgraph%2CElrond%2CChiliz%2CDecred%2CDash%2CZcash%2CTheta%20Fuel%2CNEM&vs_currencies=USD"
      )
        .then((res) => res.json())
        .then((data) => {
          const modifiedData = Object.entries(data).map(
            ([key, value], index) => {
              const price = value.usd.toFixed(2);
              const formattedPrice = parseFloat(price).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                }
              );

              return {
                id: index + 1,
                name: key.charAt(0).toUpperCase() + key.slice(1),
                price: formattedPrice,
              };
            }
          );

          setCryptocurrencies(modifiedData);
        });
    };

    fetchData();

    const interval = setInterval(fetchData, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAddToFavoritesButton = (api) => {
    const newCryptoFavorite = {
      apiId: api.id,
      userId: currentUser.id,
    };
    cryptoCurrencyPost(newCryptoFavorite);
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
            <p className="eachPrice"> Price: ${crypto.price}</p>
            <button
              className="login-btn btn-info"
              onClick={() => handleAddToFavoritesButton(crypto)}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
