import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";

export const MyPortfolio = ({ currentUser }) => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [newCryptoObject, setNewCryptoObject] = useState({
    cryptoName: "",
    note: "",
    favoriteId: 0,
  });

  useEffect(() => {
    CryptoFavoriteList().then((favorites) => {
      const filteredFavorites = favorites.filter(
        (fav) => fav.userId.currentUser.id === currentUser.id
      );
      setFavoriteCryptoList(filteredFavorites);
    });
  }, [currentUser]);

  const handleSelectChange = (cryptoNameSelectEvent) => {
    const cryptoNameCopy = { ...newCryptoObject };
    cryptoNameCopy.cryptoName = cryptoNameSelectEvent.target.value;
    setNewCryptoObject(cryptoNameCopy);
  };

  const handleInputChange = (noteInputEvent) => {
    const noteCopy = { ...newCryptoObject };
    noteCopy.note = noteInputEvent.target.value;
    setNewCryptoObject(noteCopy);
  };

  return (
    <form>
      <fieldset>
        <select onChange={handleSelectChange} value={favoriteCryptoList.id}>
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
        <input
          name="note"
          required
          type="text"
          className="setLater"
          placeholder=""
          onChange={handleInputChange}
        ></input>
      </fieldset>
    </form>
  );
};
