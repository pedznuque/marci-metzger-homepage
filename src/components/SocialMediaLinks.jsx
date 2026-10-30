import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import "./SocialMediaLinks.css";

const socialLinks = [
  { name: "Facebook", Icon: FaFacebookF, href: "https://www.facebook.com/MarciHomes/" },
  { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/marcimetzger_theridge/" },
  { name: "LinkedIn", Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/marci-metzger-30642496/" },
  { name: "Yelp", Icon: FaYelp, href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" },
];

function SocialMediaLinks() {
  return (
    <section className="social_media_section" aria-labelledby="social-media-title">
      <div className="social_media_inner">
        <div className="social_media_intro">
          <p className="social_media_eyebrow">LET'S CONNECT</p>
          <h2 id="social-media-title" className="social_media_heading">Follow Marci</h2>
          <p>Stay in touch for local updates, home inspiration, and Pahrump Valley real estate news.</p>
        </div>
        <div className="social_media_links">
          {socialLinks.map(({ name, Icon, href }) => (
            <a
              className="social_media_link"
              href={href}
              key={name}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${name}`}
              title={name}
            >
              <span className="social_media_icon"><Icon aria-hidden="true" /></span>
              <span className="social_media_name">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaLinks;
