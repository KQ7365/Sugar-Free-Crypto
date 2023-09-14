import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";

export const MyPortfolio = ({ currentUser }) => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [newCryptoObject, setNewCryptoObject] = useState({
    cryptoName: "",
    note: "",
    image: "",
    favoriteId: 0,
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

  // const handleSelectChange = (cryptoNameSelectEvent) => {
  //   const cryptoNameCopy = { ...newCryptoObject };
  //   cryptoNameCopy.cryptoName = cryptoNameSelectEvent.target.value;
  //   setNewCryptoObject(cryptoNameCopy);
  // };

  // const handleInputChange = (noteInputEvent) => {
  //   const noteCopy = { ...newCryptoObject };
  //   noteCopy.note = noteInputEvent.target.value;
  //   setNewCryptoObject(noteCopy);
  // };

  // const handleImageChange = (imageInputEvent) => {
  //   const imageCopy = { ...newCryptoObject };
  //   imageCopy.image = imageInputEvent.target.value;
  //   setNewCryptoObject(imageCopy);
  // };

  const handleInputChange = (e) => {
    const itemCopy = { ...newCryptoObject };
    itemCopy[e.target.name] = e.target.value;
    setNewCryptoObject(itemCopy);
  };

  return (
    <form>
      <fieldset>
        <select onChange={handleInputChange} name="cryptoName">
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

      <fieldset>
        <label>Enter image link</label>
        <input
          name="image"
          required
          type="text"
          className="setLater"
          placeholder="https://www.example.com"
          onChange={handleInputChange}
        ></input>
      </fieldset>
    </form>
  );
};
