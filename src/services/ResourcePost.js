export const ResourcesPost = (post) => {
  return fetch("http://localhost:8088/educationFavorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export const favoriteResourceLinkFetch = () => {
  return fetch(
    `http://localhost:8088/educationFavorites/?_expand=resource`
  ).then((res) => res.json());
};
