import React, { useState, useEffect } from "react";
import { ReactComponent as LightThemeIcon } from "../assets/img/dayicon.svg";
import { ReactComponent as DarkThemeIcon } from "../assets/img/nighticon.svg";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className={`theme-toggler ${theme}`} onClick={toggleTheme}>
      <LightThemeIcon />
      <div className="toggle-track">
        <div className="toggle-ball" />
      </div>
      <DarkThemeIcon />
    </button>
  );
};

export default ThemeToggler;
