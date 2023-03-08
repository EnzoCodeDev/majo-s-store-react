import React, { useState, useEffect } from "react";
// import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";
// import logo from "../../assets/img/logo/logo-higueron.png";
// import { NavBarMobile } from "../navbar-mobile/NavBarMobile";
// import { Navbar } from "../navbar/Navbar";
// import Socials from "../Socials";
import "./header.scss";

export const Header = () => {
  const [bg, setBg] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header
      className={`${
        bg ? "container-main-opacity " : "container-main-not-opacity "
      } container-main`}
    >
      <div className="container-sub-main">
        <div className="icon-container">
          <label htmlFor="night-light-checkbox" className="night-light-label">
            <input
              onClick={(e) => handleDarkMode(e)}
              type="checkbox"
              id="night-light-checkbox"
            />
            <span className="night-light-ball"></span>
            <div className="container-sub-icon">
              {/* <WiMoonAltWaningCrescent4
                className={`icon-mode ${darkMode ? " active-mode" : " "} `}
              />
              <WiDaySunny
                className={`icon-mode ${darkMode ? " active-mode" : " "}`}
              /> */}
            </div>
          </label>
        </div>
        {/* logo */}
        <div className="wp-block-image">
          <figure className="figure-img">
            {/* <img src={logo} alt=''/> */}
          </figure>
        </div>
        {/* nav */}
        <div className="nav-desktop">
          {/* <Navbar /> */}
        </div>
        {/* Socials */}
        <div className="social">
          {/* <Socials /> */}
        </div>
        {/* nav mobile*/}
        <div className="nav-mobile">
          {/* <NavBarMobile /> */}
        </div>
      </div>
    </header>
  );
};
