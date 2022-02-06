import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="login-background-img">
      <header className="header">
        <h1>
          <a href="/" id="logo">
            NETFLIX
          </a>
        </h1>
      </header>
      <div className="login-form-container registration">
        <form method="POST">
          <h3 id="login-form-title">Registrera dig</h3>
          <div className="reg-container">
            <input
              className="login-input"
              type="text"
              placeholder="Förnamn"
              name="firstname"
              required
            />
            <input
              className="login-input"
              type="text"
              placeholder="Efternamn"
              name="lastname"
              required
            />
          </div>
          <input
            className="login-input"
            type="text"
            placeholder="Telefonnummer"
            name="phone"
            required
          />
          <input
            className="login-input"
            type="email"
            placeholder="Epost"
            name="email"
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Lösenord"
            name="password"
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Bekräfta lösenord"
            name="password2"
            required
          />
          <button id="login-button">Registrera</button>
        </form>
        <div className="reg">
          <Link to="/" className="new">
            Avbryt registrering
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
