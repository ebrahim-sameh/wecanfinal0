import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/we-can-logo2-gold-and-white.png";
// import Logo from '../images/golden-and-white1.png'

import "./Header.scss";
const Header = () => {

  const location = useLocation();

  let home = false;

  if(location.pathname === '/we-can' || location.pathname === '/') {
    home = true
  }

  console.log(home)

  return (
    <header>
      <nav className="nav__container container d-flex align-items-center justify-content-between">
        <div className="logo">
          <NavLink to="/we-can">
            <img src={Logo} alt="LOGO" />
          </NavLink>
        </div>
        <ul className="nav__links d-flex aling-items-center justify-content-end">
          <li>
            <NavLink
              to="/we-can"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          {home && (
            <>
              <li>
                <a href="#gallary">Gallary</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#our-projects">Our Projects</a>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
