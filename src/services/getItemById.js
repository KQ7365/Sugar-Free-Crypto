export const getItemById = (id) => {
  return fetch(`http://localhost:8089/notes/${id}`).then((res) => res.json());
};
