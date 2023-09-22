export const fetchUserData = (userId) => {
  const apiUrl = `http://localhost:8088/Favorites?_embed=notes&userId=${userId}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error("Fetch error:", error);
    });
};
