import { NavBar } from "../components/nav/NavBar";
import { EducationList } from "../components/education/EducationList";
import { MyPortfolio } from "../components/portfolio/MyPortfolio";
import { Login } from "../components/auth/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import { CryptoCurrencyList } from "../components/cryptocurrencies/CryptoCurrencyList";
import { HomePageHTML } from "../components/homepage/HomePage";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCryptoUser = localStorage.getItem("crypto_user");
    const cryptoUserObject = JSON.parse(localCryptoUser);

    setCurrentUser(cryptoUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<HomePageHTML currentUser={currentUser} />} />
        <Route
          path="/education"
          element={<EducationList currentUser={currentUser} />}
        />
        <Route
          path="/cryptocurrencies"
          element={<CryptoCurrencyList currentUser={currentUser} />}
        />
        <Route
          path="/portfolio"
          element={<MyPortfolio currentUser={currentUser} />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
