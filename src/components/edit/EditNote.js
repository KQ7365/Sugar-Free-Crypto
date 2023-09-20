import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../../services/getItemById";
import { editNote } from "../../services/editNote";

export const EditNote = () => {
  const [item, setItem] = useState({});
  const { notesId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getItemById(notesId).then((itemObj) => {
      setItem(itemObj);
    });
  }, [notesId]);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedNote = {
      note: item.note,
      resourceUrl: item.resourceUrl,
      cryptoName: item.cryptoName,
      favoriteId: item.favoriteId,
      id: item.id,
    };
    editNote(updatedNote).then(() => {
      navigate(`/notes/${item.id}`);
    });
  };

  return (
    <div className="wholeEntry">
      <h1 className="editTitle">
        <u>Cryptocurrency:</u> <b>{item.cryptoName ? item.cryptoName : " "}</b>
      </h1>

      <fieldset>
        <label>Enter Notes</label>
        <textarea
          name="note"
          value={item.note ? item.note : ""}
          rows={6}
          required
          type="text"
          className="setLater"
          placeholder=""
          onChange={(e) => {
            const itemCopy = { ...item };
            itemCopy.note = e.target.value;
            setItem(itemCopy);
          }}
        ></textarea>
      </fieldset>

      <fieldset>
        <label>Enter Resource Url</label>
        <input
          value={item.resourceUrl ? item.resourceUrl : ""}
          name="resource"
          required
          type="text"
          className="setLater"
          placeholder="https://www.example.com"
          onChange={(e) => {
            const itemCopy = { ...item };
            itemCopy.resourceUrl = e.target.value;
            setItem(itemCopy);
          }}
        ></input>
      </fieldset>

      <div>
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};
