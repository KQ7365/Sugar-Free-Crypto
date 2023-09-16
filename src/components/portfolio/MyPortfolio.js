import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";
import { NotesPost } from "../../services/NotesPost";
import "./MyPortfolio.css";
import { favoriteResourceService } from "../../services/favoriteService";

export const MyPortfolio = ({ currentUser }) => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [cryptoNotesItem, setCryptoNotesItem] = useState([]);
  const [newCryptoObject, setNewCryptoObject] = useState({
    cryptoName: "",
    note: "",
    resourceUrl: "",
    currentUserId: { currentUser },
  });

  useEffect(() => {
    CryptoFavoriteList().then((favorites) => {
      const filteredFavorites = favorites.filter(
        (fav) => fav.userId.currentUser.id === currentUser.id
      );
      setFavoriteCryptoList(filteredFavorites);
    });
  }, [currentUser]);

  useEffect(() => {
    favoriteResourceService().then((cryptoNotes) => {
      const filteredNotes = cryptoNotes.filter(
        (note) => note.currentUser.currentUser.id === currentUser.id
      );
      setCryptoNotesItem(filteredNotes);
    });
  }, [newCryptoObject, currentUser]);

  const handleInputChange = (e) => {
    const itemCopy = { ...newCryptoObject };
    itemCopy[e.target.name] = e.target.value;
    setNewCryptoObject(itemCopy);
  };

  const handleAddNotesClick = (e) => {
    e.preventDefault();

    const newNotesItem = {
      name: newCryptoObject.cryptoName,
      note: newCryptoObject.note,
      resource: newCryptoObject.resourceUrl,
      currentUser: { currentUser },
    };

    NotesPost(newNotesItem).then(() => {
      setNewCryptoObject({
        cryptoName: "",
        note: "",
        resourceUrl: "",
        currentUserId: { currentUser },
      });
    });
  };

  return (
    <div>
      <body className="favoriteCardParentDiv">
        <div className="favoriteCard">
          <h1>Favorite Links</h1>
        </div>
        <div className="favoriteCard">
          <h1>Favorite Crypto</h1>
          {favoriteCryptoList.map((favObj) => {
            return (
              <div key={favObj.id} value={favObj.cryptoName}>
                Crypto: {favObj.cryptoName} | Price: {favObj.price}
              </div>
            );
          })}
        </div>
      </body>

      <div className="wholeEntry">
        <form>
          <fieldset>
            <select
              onChange={handleInputChange}
              name="cryptoName"
              value={newCryptoObject.cryptoName}
            >
              <option value="0">Choose one of your crypto favorites</option>
              {favoriteCryptoList.map((favObj) => {
                return (
                  <option key={favObj.id} value={favObj.cryptoName}>
                    {favObj.cryptoName}
                  </option>
                );
              })}
            </select>
          </fieldset>

          <fieldset>
            <label>Enter Notes</label>
            <textarea
              name="note"
              rows={6}
              required
              type="text"
              className="setLater"
              placeholder=""
              onChange={handleInputChange}
              value={newCryptoObject.note}
            ></textarea>
          </fieldset>

          <fieldset>
            <label>Enter Resource Url</label>
            <input
              value={newCryptoObject.resourceUrl}
              name="resourceUrl"
              required
              type="text"
              className="setLater"
              placeholder="https://www.example.com"
              onChange={handleInputChange}
            ></input>
          </fieldset>

          <button onClick={handleAddNotesClick}>Add Note</button>
        </form>
      </div>
      <div>
        <h2>Crypto Notes</h2>
      </div>
      <div>
        {cryptoNotesItem.map((noteObj) => {
          return (
            <div key={noteObj.id} value={noteObj.id}>
              Crypto: {noteObj.name}
              Notes: {noteObj.note}
              Resource Url: {noteObj.resource}
            </div>
          );
        })}
      </div>
    </div>
  );
};
