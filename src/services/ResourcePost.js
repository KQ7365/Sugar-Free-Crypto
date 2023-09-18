export const ResourcesPost = (post) => {
  return fetch("http://localhost:8089/urlFavorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};
