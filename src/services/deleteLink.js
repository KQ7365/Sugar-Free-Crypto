export const deleteLink = (linkId) => {
  return fetch(`http://localhost:8088/educationFavorites/${linkId}`, {
    method: "DELETE",
  });
};
