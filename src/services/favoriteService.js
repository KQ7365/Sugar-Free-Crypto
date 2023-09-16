export const favoriteResourceService = () => {
  return fetch("http://localhost:8088/notes").then((res) => res.json());
};
