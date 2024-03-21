// Header.js
import React from "react";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <nav className="nav-container">
          <div className="brand-container">
            <img alt="basebook logo" width="50px" height="50px" src={Logo} />
            <span className="brand-text">basebook</span>
          </div>

          <div className="btn-container">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
