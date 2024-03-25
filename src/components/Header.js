// Header.js
import React from "react";
import Logo from "../assets/img/logo.svg";
import TelegramLogo from "../assets/img/telelogo.png";
import XLogo from "../assets/img/xlogo.png";

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
            <a
              target="_blank"
              rel="noopener"
              href="/"
              className="header-link buy"
            >
              Buy
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="/"
              className="header-link chart"
            >
              Chart
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/basebooklol"
              className="header-link x"
            >
              <img
                width="24px"
                height="24px"
                alt="x.com link"
                src={XLogo}
              ></img>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/basebookportal"
              className="header-link tg"
            >
              <img
                width="24px"
                height="24px"
                alt="Telegram link"
                src={TelegramLogo}
              ></img>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
