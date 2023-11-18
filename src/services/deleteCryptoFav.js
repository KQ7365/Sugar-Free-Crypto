export const deleteCryptoFav = (favId) => {
  return fetch(`http://localhost:8088/favorites/${favId}`, {
    method: "DELETE",
  });
};
