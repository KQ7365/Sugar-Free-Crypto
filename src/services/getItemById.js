export const getItemById = (id) => {
  return fetch(`http://localhost:8088/notes/${id}`).then((res) => res.json());
};
