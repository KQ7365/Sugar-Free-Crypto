export const NotesPost = (item) => {
  return fetch("http://localhost:8089/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
};
