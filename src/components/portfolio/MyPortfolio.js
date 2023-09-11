import { useEffect, useState } from "react";
import { CryptoFavoriteList } from "../../services/CryptoFavoriteList";

export const MyPortfolio = () => {
  const [favoriteCryptoList, setFavoriteCryptoList] = useState([]);

  useEffect(() => {
    CryptoFavoriteList().then((favoriteArray) => {
      setFavoriteCryptoList(favoriteArray);
    });
  }, []);
  return (
    <form>
      <fieldset>
        <select>
          <option value="" disabled selected hidden>
            Choose an option
          </option>
          {favoriteCryptoList.map((favObj) => {
            return <option value={favObj.id}>{favObj.name}</option>;
          })}
        </select>
      </fieldset>
    </form>
  );
};
