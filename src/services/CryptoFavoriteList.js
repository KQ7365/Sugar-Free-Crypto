export const CryptoFavoriteList = () => {
  return fetch("http://localhost:8088/apiFavorites").then((res) => res.json());
};
