import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../../services/getItemById";

export const NoteDetails = () => {
  const [item, setItem] = useState({});

  const { notesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getItemById(notesId).then((itemObj) => {
      setItem(itemObj);
    });
  }, [notesId]);

  return (
    <div>
      <h3 className="set">Cryptocurrency: {item.name}</h3>
      <div>Notes: {item.note}</div>
      <div>Resource: {item.resource}</div>
      <button
        onClick={() => {
          navigate(`/notes/${item.id}/edit`);
        }}
      >
        Edit Item
      </button>
      <button
        onClick={() => {
          navigate(`/portfolio`);
        }}
      >
        Return to Favorites
      </button>
    </div>
  );
};
