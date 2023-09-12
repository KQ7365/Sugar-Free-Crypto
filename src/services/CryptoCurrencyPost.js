export const cryptoCurrencyPost = (item) => {
  return fetch("http://localhost:8088/apiFavorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
