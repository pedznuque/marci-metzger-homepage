import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site_footer">
      <div className="site_footer_inner">
        <div className="site_footer_brand">
          <a href="#top" aria-label="Marci Metzger Homes home">
            <img src={logo} alt="Marci Metzger Homes" />
          </a>
          <p>Local real estate guidance in Pahrump Valley.</p>
        </div>

        <nav className="site_footer_nav" aria-label="Footer navigation">
          <h2>Explore</h2>
          <a href="#listings">Listings</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="site_footer_contact">
          <h2>Visit or call</h2>
          <a
            href="https://maps.google.com/?q=3190+S+Hwy+160,+Suite+F,+Pahrump,+NV+89048"
            target="_blank"
            rel="noreferrer"
          >
            <FaLocationDot aria-hidden="true" />
            <span>3190 HW-160, Suite F<br />Pahrump, NV 89048</span>
          </a>
          <a href="tel:+12069196886">
            <FaPhone aria-hidden="true" />
            <span>(206) 919-6886</span>
          </a>
        </div>
      </div>
      <div className="site_footer_bottom">
        <p>&copy; {currentYear} Marci Metzger Homes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
