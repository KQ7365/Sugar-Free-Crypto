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
    <div className="wholeEntry">
      <div className="customNoteCard">
        <div className="">
          <div className="noteDivItem" key={item.id}>
            <u>Cryptocurrency:</u> <b>{item.cryptoName}</b>
          </div>
        </div>
        <div className="noteDivItem">
          <u>Notes:</u> {item.note}
        </div>

        <div className="noteDivItem">
          <u>Resource:</u> {item.resourceUrl}
        </div>
      </div>
      <div className="buttonAlign">
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
    </div>
  );
};
