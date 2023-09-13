import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";

export const MyPortfolio = () => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);
  const [cryptoNameSelect, setCryptoNameSelect] = useState([]);

  useEffect(() => {
    CryptoFavoriteList().then((favoriteArray) => {
      setFavoriteCryptoList(favoriteArray);
    });
  }, []);

  const handleSelectChange = (event) => {
    const cryptoNameCopy = { ...cryptoNameSelect };
    cryptoNameCopy[event.target.name] = event.target.value;
    setCryptoNameSelect(cryptoNameCopy);
  };

  return (
    <form>
      <fieldset>
        <select onChange={handleSelectChange}>
          <option>Choose an option</option>
          {favoriteCryptoList.map((favObj) => {
            return (
              <option key={favObj.id} value={favObj.name}>
                {favObj.name}
              </option>
            );
          })}
        </select>
      </fieldset>
    </form>
  );
};
