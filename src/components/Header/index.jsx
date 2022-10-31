import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/we-can-logo2-gold-and-white.png";
import { MdClose, MdOutlineMenu } from 'react-icons/md'
import { useTranslation } from "react-i18next";
import AppContext from "../../store/app-context";
// import { Link } from 'react-scroll'

import "./Header.scss";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const ctx = useContext(AppContext);
  const {t} = useTranslation();
  const location = useLocation();

  let home = false;

  if(location.pathname === '/we-can' || location.pathname === '/we-can/' || location.pathname === '/') {
    home = true
  }

  return (
    <header>
      <nav className="nav__container container d-flex align-items-center justify-content-between">
        <div className="logo">
          <NavLink to="/we-can">
            <img src={Logo} alt="LOGO" />
          </NavLink>
        </div>
        <ul className={`nav__links d-flex aling-items-center justify-content-end ${openMenu ? 'open__menu' : ''}`}>
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="we-can"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
               {t('main')}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t('About_Us')}
            </NavLink>
          </li>
          {home && (
            <>
              <li onClick={() => setOpenMenu(false)}>
                <button className="scroll__btn" onClick={() => window.scrollTo(ctx.GalleryOffsetTop)}>{t('Gallary')}</button>
              </li>
              {/* <li onClick={() => setOpenMenu(false)}>
                <a href="#about-us">About Us</a>
              </li> */}
              <li onClick={() => setOpenMenu(false)}>
                <button className="scroll__btn" onClick={() => window.scrollTo(ctx.OurProjectsOffsetTop)}>{t('Our_Projects')}</button>
              </li>
            </>
          )}
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t('Contact_Us')}
            </NavLink>
          </li>
          <li>
            <button className="toggle__lang" onClick={() => ctx.toggleLang()}>{ctx.lang === 'ar' ? 'الانجليزية' : 'Arabic'}</button>
          </li>
          <button className="close__btn" onClick={() => setOpenMenu(false)}><MdClose /></button>
        </ul>
        <button className="open__btn" onClick={() => setOpenMenu(true)}><MdOutlineMenu /></button>
      </nav>
    </header>
  );
};

export default Header;
