export const getResources = () => {
  return fetch(`http://localhost:8088/resources/`).then((res) => res.json());
};
