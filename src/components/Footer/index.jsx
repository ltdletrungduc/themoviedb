import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";
import { ReactComponent as LogoFooter } from "assets/footer_logo.svg";
import footer_bg from "assets/footer_bg.jpg";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footer_bg})` }}>
      <div className="footer-container container">
        <Link to="/" className="footer-logo">
          <LogoFooter />
        </Link>
        <nav className="footer-navigation">
          <ul className="footer-navigation-list">
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Home
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Contact us
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Term of service
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                About us
              </Link>
            </li>
          </ul>
          <ul className="footer-navigation-list">
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Live
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                FAQ
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Premium
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Privacy policy
              </Link>
            </li>
          </ul>
          <ul className="footer-navigation-list">
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Must Watch
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Recent release
              </Link>
            </li>
            <li className="footer-navigation-item">
              <Link to="/" className="footer-navigation-link">
                Top IMDB
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
