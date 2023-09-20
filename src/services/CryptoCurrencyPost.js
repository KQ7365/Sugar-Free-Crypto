export const cryptoCurrencyPost = (item) => {
  return fetch("http://localhost:8088/Favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
