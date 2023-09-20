export const editNote = (item) => {
  return fetch(`http://localhost:8088/notes/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
