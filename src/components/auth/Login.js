import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userService";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "crypto_user",
          JSON.stringify({
            id: user.id,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <div class="backgroundLogin">
      <img alt="cyberpunk" src="light-blue copy.png" class="loginIMG" />
      <div class="container-login">
        <div className="headerText">
          <h1>Sugar Free Crypto</h1>
          <h2>Please sign in</h2>
        </div>
        <form class="form-login" onSubmit={handleLogin}>
          <fieldset>
            <div class="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                class="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div class="form-group">
              <button class="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
        <section>
          <Link to="/register">Not a member yet?</Link>
        </section>
      </div>
    </div>
  );
};
