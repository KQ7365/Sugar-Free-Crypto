export const deleteNote = (notesId) => {
  return fetch(`http://localhost:8088/notes/${notesId}`, { method: "DELETE" });
};
