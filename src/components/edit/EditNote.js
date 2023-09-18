import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../../services/getItemById";
import { editNote } from "../../services/editNote";

export const EditNote = ({ currentUser }) => {
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
      name: item.name,
      note: item.note,
      resource: item.resource,
      currentUser: { currentUser },
      id: item.id,
    };
    editNote(updatedNote).then(() => {
      navigate(`/notes/${item.id}`);
    });
  };

  return (
    <div className="wholeEntry">
      <h1 className="editTitle">
        <u>Cryptocurrency:</u> <b>{item.name}</b>
      </h1>

      <fieldset>
        <label>Enter Notes</label>
        <textarea
          name="note"
          value={item.note}
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
          value={item.resource}
          name="resource"
          required
          type="text"
          className="setLater"
          placeholder="https://www.example.com"
          onChange={(e) => {
            const itemCopy = { ...item };
            itemCopy.resource = e.target.value;
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
