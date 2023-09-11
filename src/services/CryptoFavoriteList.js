export const CryptoFavoriteList = () => {
  return fetch("http://localhost:8088/favorites").then((res) => res.json());
};
