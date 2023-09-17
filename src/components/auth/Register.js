import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { createUser, getUserByEmail } from "../../services/userService";

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    fullName: "",
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    createUser(customer).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "crypto_user",
          JSON.stringify({
            id: createdUser.id,
          })
        );

        navigate("/login");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(customer.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  const updateCustomer = (evt) => {
    const copy = { ...customer };
    copy[evt.target.id] = evt.target.value;
    setCustomer(copy);
  };

  return (
    <div class="backgroundLogin">
      <img
        src="cyberpunk-looking-down.png"
        alt="registerIMG"
        class="loginIMG"
      />
      <div class="container-login">
        <div className="headerText">
          <h1>Sugar Free Crypto</h1>
          <h2>Please Register</h2>
        </div>
        <form className="form-login" onSubmit={handleRegister}>
          <fieldset>
            <div className="form-group">
              <input
                onChange={updateCustomer}
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <input
                onChange={updateCustomer}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
