import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import logo from '../../images/Logo.svg';

export const Footer = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="footer__wrapper">
          <NavLink to="/" className="main-logo">
            <img src={logo} alt="Logo" className="logo__img" />
          </NavLink>
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/">
                  Github
                </NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/s">
                  Contacts
                </NavLink>
              </li>

              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/d">
                  Rights
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer-button-wrapper">
            Back to top
            <button
              aria-label="move-to-top"
              type="button"
              className="footer-button"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
