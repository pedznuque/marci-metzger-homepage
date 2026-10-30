import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";
import { IoMdCall } from "react-icons/io";




function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav_bar">
      <div className="nav_brand">
        <a href="#top" onClick={closeMenu} aria-label="Marci Metzger Homes home">
          <img src={logo} alt="Marci Metzger Homes" />
        </a>
      </div>

      <button
        className="nav_menu_button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav_links${menuOpen ? " nav_links--open" : ""}`}
        id="primary-navigation"
      >
        <a href="#listings" onClick={closeMenu}>LISTINGS</a>
        <a href="#advanced-search" onClick={closeMenu}>LET'S MOVE</a>
        <a href="#about" onClick={closeMenu}>ABOUT US</a>
        <a className="nav_talk_link" href="#contact" onClick={closeMenu}>
          <IoMdCall aria-hidden="true" /> LET'S TALK
        </a>
      </nav>

    </div>
  );
}

export default Navbar;
