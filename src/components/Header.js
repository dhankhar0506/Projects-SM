import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <nav>
        <h1>CODING-BOOM 🔥</h1>
        <main>
          <HashLink to="/#home">HOME</HashLink>
          <Link to="/contact">CONTACT</Link>
          <HashLink to="/#about">ABOUT</HashLink>
          <HashLink to="/#brands">BRANDS</HashLink>
          <HashLink to="/services">SERVICES</HashLink>
        </main>
      </nav>
    </>
  );
};

export default Header;
