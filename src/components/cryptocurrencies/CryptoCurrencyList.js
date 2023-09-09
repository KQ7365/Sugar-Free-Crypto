import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CryptoCurrencyList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState({});

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CTether%2CBinance%20Coin%2CCardano%2CXRP%2CDogecoin%2CPolkadot%2CUSD%20Coin%2CUniswap%2CLitecoin%2CBitcoin%20Cash%2CSolana%2CChainlink%2CPolygon%2CEthereum%20Classic%2CStellar%2CVeChain%2CFilecoin%2CTerra%2CTHETA%2CWrapped%20Bitcoin%2CDai%2CAave%2CCosmos%2CCrypto.com%20Coin%2CMonero%2CPancakeSwap%2CNEO%2CEOS%2CTRON%2CIOTA%2CFTX%20Token%2CCompound%2CTezos%2CBitTorrent%2CAvalanche%2CKlaytn%2CHuobi%20Token%2CAlgorand%2CBitcoin%20SV%2COKB%2CHedera%20Hashgraph%2CElrond%2CChiliz%2CDecred%2CDash%2CZcash%2CTheta%20Fuel%2CNEM&vs_currencies=USD"
    )
      .then((res) => res.json())
      .then((data) => {
        const modifiedData = {};

        for (const key in data) {
          const price = data[key].usd;

          modifiedData[key] = {
            name: key.charAt(0).toUpperCase() + key.slice(1),
            price: price,
          };
        }
        setCryptocurrencies(modifiedData);
      });
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      {Object.keys(cryptocurrencies).map((key) => (
        <div key={key}>
          <h3>{cryptocurrencies[key].name}</h3>
          <p>Price: {cryptocurrencies[key].price}</p>
        </div>
      ))}
    </div>
  );
};
