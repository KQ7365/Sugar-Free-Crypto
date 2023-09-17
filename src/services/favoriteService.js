export const favoriteResourceService = () => {
  return fetch("http://localhost:8089/notes").then((res) => res.json());
};
