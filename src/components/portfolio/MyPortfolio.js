import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";
import { NotesPost } from "../../services/NotesPost";
import "./MyPortfolio.css";
import { favoriteResourceService } from "../../services/favoriteService";
import { useNavigate, useParams } from "react-router-dom";
import { TwitterShareButton } from "react-share";
import { favoriteResourceLinkFetch } from "../../services/ResourcePost";
import { fetchUserData } from "../../services/NotesEmbed";
import { deleteNote } from "../../services/noteDelete";
import { deleteLink } from "../../services/deleteLink";
import { deleteCryptoFav } from "../../services/deleteCryptoFav";
export const MyPortfolio = ({ currentUser }) => {
  const { notesId } = useParams();
  const [item, setItem] = useState([]);
  const [favoriteLink, setFavoriteLink] = useState([]);
  const [cryptoNotesItem, setCryptoNotesItem] = useState([]);
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [newCryptoObject, setNewCryptoObject] = useState({
    noteId: notesId,
    note: "",
    resourceUrl: "",
    cryptoName: "",
  });
  console.log(item);
  const navigate = useNavigate();

  const getNotesAgain = () => {
    favoriteResourceService().then((notesArray) => {
      setCryptoNotesItem(notesArray);
    });
  };
  const getLinksAgain = () => {
    favoriteResourceLinkFetch().then((linksArray) => {
      setFavoriteLink(linksArray);
    });
  };
  const getCryptosAgain = () => {
    CryptoFavoriteList().then((cryptoArray) => {
      setFavoriteCryptoList(cryptoArray);
    });
  };

  useEffect(() => {
    if (currentUser && currentUser.id) {
      fetchUserData(currentUser.id)
        .then((itemObj) => {
          console.log("API Response:", itemObj);
          setItem(itemObj);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    CryptoFavoriteList().then((favObj) => {
      setFavoriteCryptoList(favObj);
    });
  }, [currentUser]);

  useEffect(() => {
    //*handles displaying favorite links
    favoriteResourceLinkFetch().then((favoriteLink) => {
      const filteredFavoriteLink = favoriteLink.filter(
        (link) => link.userId === currentUser.id
      );
      setFavoriteLink(filteredFavoriteLink);
    });
  }, [currentUser]);

  useEffect(() => {
    favoriteResourceService().then((cryptoNotes) => {
      setCryptoNotesItem(cryptoNotes);
    });
  }, [newCryptoObject]); //THIS IS GETTING NOTES

  const handleInputChange = (e) => {
    const itemCopy = { ...newCryptoObject };
    itemCopy[e.target.name] = e.target.value;
    setNewCryptoObject(itemCopy);
  };

  const handleAddNotesClick = (e) => {
    e.preventDefault();

    const newNotesItem = {
      note: newCryptoObject.note,
      resourceUrl: newCryptoObject.resourceUrl,
      cryptoName: newCryptoObject.cryptoName,
    };

    NotesPost(newNotesItem).then(() => {
      setNewCryptoObject({
        note: "",
        resourceUrl: "",
        cryptoName: "",
      });
    });
  };

  const handleDeleteNote = (itemId) => {
    deleteNote(itemId).then(getNotesAgain);
  };
  const handleDeleteLink = (itemId) => {
    deleteLink(itemId).then(getLinksAgain);
  };
  const handleDeleteCryptoFav = (itemId) => {
    deleteCryptoFav(itemId).then(getCryptosAgain);
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
              <div key={linkObj.id}>
                Link: {linkObj.resource.urlLink}
                <div>
                  <button
                    key={linkObj.id}
                    className="deleteButton"
                    onClick={() => handleDeleteLink(linkObj.id)}
                  >
                    Remove Favorite
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="favoriteCard">
          <h1>
            <u>Favorite Crypto</u>
          </h1>
          {favoriteCryptoList.map((fav) => (
            <div key={fav.id}>
              {fav.name} {fav.price}
              <div>
                <button
                  key={fav.id}
                  className="deleteButton"
                  onClick={() => handleDeleteCryptoFav(fav.id)}
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wholeEntry">
        <form className="createNoteBorder" autoComplete="off">
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
              {favoriteCryptoList.map((fav) => (
                <option key={fav.id}>{fav.name}</option>
              ))}
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
                <u>Cryptocurrency:</u> {noteObj.cryptoName}
              </div>
              <div className="noteDivItem">
                <u>Notes:</u> {noteObj.note}
              </div>
              <div className="noteDivItem">
                <u>Resource Url:</u> {noteObj.resourceUrl}
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
                      "www.sugarfreecrypto.com/favorites/note" +
                      " I think this crypto note of mine is something you should all read! Go check out my page!!🚀🌛 #ThankYouForUsingMyApplication"
                    }
                  >
                    Add Some Sugar
                  </TwitterShareButton>
                </div>

                <div>
                  <button
                    key={noteObj.id}
                    className="deleteButton"
                    onClick={() => handleDeleteNote(noteObj.id)}
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
