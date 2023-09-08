export const getAllCryptoTokens = () => {
  return fetch("https://api.coingecko.com/api/v3/coins/bitcoin/tickers")
    .then((res) => res.json())
    .then((data) => data.tickers);
};
