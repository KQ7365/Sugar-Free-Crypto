import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";
import { NotesPost } from "../../services/NotesPost";
import "./MyPortfolio.css";
import { favoriteResourceService } from "../../services/favoriteService";
import { useNavigate } from "react-router-dom";
import { TwitterShareButton } from "react-share";
import { favoriteResourceLinkFetch } from "../../services/ResourcePost";

export const MyPortfolio = ({ currentUser }) => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [favoriteLink, setFavoriteLink] = useState([]);
  const [cryptoNotesItem, setCryptoNotesItem] = useState([]);
  const [newCryptoObject, setNewCryptoObject] = useState({
    cryptoName: "",
    note: "",
    resourceUrl: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    CryptoFavoriteList().then((favorites) => {
      const filteredFavorites = favorites.filter(
        (fav) => fav.userId.currentUser.id === currentUser.id
      );
      setFavoriteCryptoList(filteredFavorites);
    });

    favoriteResourceLinkFetch().then((favoriteLink) => {
      const filteredLinkFavorite = favoriteLink.filter(
        (fav) => fav.userId.currentUser.id === currentUser.id
      );
      setFavoriteLink(filteredLinkFavorite);
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
        currentUser: { currentUser },
      });
    });
  };

  const handleDeleteItemClick = (id) => {
    fetch(`http://localhost:8089/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Item successfully deleted, update the cryptoNotesItem array
          setCryptoNotesItem((prevNotes) =>
            prevNotes.filter((note) => note.id !== id)
          );
        } else {
          throw new Error("Failed to delete item");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="favoriteCardParentDiv">
        <div className="favoriteCard">
          <h1>
            <u>Favorite Links</u>
          </h1>
          {favoriteLink.map((linkObj) => {
            return (
              <div key={linkObj.id} value={linkObj.id}>
                Link: {linkObj.newLink}
              </div>
            );
          })}
        </div>
        <div className="favoriteCard">
          <h1>
            <u>Favorite Crypto</u>
          </h1>
          {favoriteCryptoList.map((favObj) => {
            return (
              <div key={favObj.id} value={favObj.id}>
                Crypto: {favObj.cryptoName} | Price: {favObj.price}
              </div>
            );
          })}
        </div>
      </div>

      <div className="wholeEntry">
        <form className="createNoteBorder">
          <fieldset>
            <div className="favoriteCardChange">
              <h2>
                <u>Create a Cryptocurrency Note</u>
              </h2>
            </div>
            <select
              onChange={handleInputChange}
              name="cryptoName"
              value={newCryptoObject.cryptoName}
            >
              <option value="0">
                Select one of your favorite cryptocurrencies
              </option>
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
            <label htmlFor="note">Enter Notes</label>
            <textarea
              id="note"
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
            <label htmlFor="resourceUrl">Enter Resource Url</label>
            <input
              id="resourceUrl"
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
      <div className="favoriteCardParentDiv">
        <div className="favoriteCardNotes">
          <h2>
            <u>Cryptocurrency Notes</u>
          </h2>
        </div>
      </div>
      <div className="wholeEntry">
        {cryptoNotesItem.map((noteObj) => {
          return (
            <div className="customNoteCard" key={noteObj.id} value={noteObj.id}>
              <div className="noteDivItem">
                <u>Cryptocurrency:</u> {noteObj.name}
              </div>
              <div className="noteDivItem">
                <u>Notes:</u> {noteObj.note}
              </div>
              <div className="noteDivItem">
                <u>Resource Url:</u> {noteObj.resource}
              </div>
              <div className="buttonAlign">
                <div>
                  <button
                    onClick={() => {
                      navigate(`/notes/${noteObj.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
                <div className="customNoteCardTwitter">
                  <TwitterShareButton
                    className="twitterShareButton"
                    url={
                      "www.sugarfreecrypto.com/favorites/BitcoinNote" +
                      " I think I found the next cryptocurrency going to the moon! Go check out my page. I have all the notes you need about it!🚀🌛 #NSS #C66 #Val #Dave #Derek #ThankYouForWatching"
                    }
                  >
                    Add Some Sugar
                  </TwitterShareButton>
                </div>

                <div>
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteItemClick(noteObj.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
