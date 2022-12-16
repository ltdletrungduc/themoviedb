import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo.svg";

import "./header.scss";

const headerLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Movies",
    path: "/movies",
  },
  {
    text: "TV Serrries",
    path: "/tv",
  },
];

function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const activeLink = headerLinks.findIndex((item) => item.path === pathname);

  useEffect(() => {
    let headerFixedHandle = function () {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        headerRef.current.classList.add("is-fixed");
      } else {
        headerRef.current.classList.remove("is-fixed");
      }
    };
    window.addEventListener("scroll", headerFixedHandle);
    return () => {
      window.removeEventListener("scroll", headerFixedHandle);
    };
  }, []);
  return (
    <header ref={headerRef} className="header">
      <div className="header-container container">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>
        <ul className="header-links">
          {headerLinks.map((item, index) => (
            <li
              key={index}
              className={`header-link ${
                index === activeLink ? "is-active" : ""
              }`}
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
