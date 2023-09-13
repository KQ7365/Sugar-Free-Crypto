import { NavBar } from "../components/nav/NavBar";
import { EducationList } from "../components/education/EducationList";
import { MyPortfolio } from "../components/portfolio/MyPortfolio";
import { LoginPage } from "../components/login/LoginPage";
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
        <Route path="/" element={<HomePageHTML />} />
        <Route path="/education" element={<EducationList />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencyList />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
