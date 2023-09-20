export const CryptoFavoriteList = () => {
  return fetch("http://localhost:8088/Favorites").then((res) => res.json());
};
