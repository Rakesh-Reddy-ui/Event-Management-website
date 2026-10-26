
import React from "react";
import { Link } from "react-router-dom";

// Contact icons
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight
} from "lucide-react";

// Social media icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "../CSS/Footer.css";

// QUICK LINKS
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/event" },
  { name: "Packages", path: "/packages" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" }
];

// SERVICES
const services = [
  "Decoration",
  "Catering & Food",
  "Cake & Desserts",
  "Photography",
  "Videography",
  "Music & DJ",
  "More..."
];

function Footer() {
  return (
    <footer className="website-footer">
      <div className="footer-container">

        {/* =========================
            COMPANY INFORMATION
        ========================= */}
        <div className="footer-company">

          <Link to="/" className="footer-brand">
            <div className="footer-logo">
              {/* <img
                src="/assets/images/logo.png"
                alt="Suyochi Robotics"
              /> */}
              <div className="logo-icon">R</div>
            </div>

            <div className="footer-brand-name">
              <h2>Rakesh</h2>
              <span>Events . Planning</span>
            </div>
          </Link>

          <p className="footer-description">
            Choose your event type and let us create a 
            personalized experience Choose your event 
            type and let us create a personalized 
            experience
          </p>

        </div>

        {/* =========================
            QUICK LINKS
        ========================= */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =========================
            OUR SERVICES
        ========================= */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            {services.map((service) => (
              <li key={service}>
                <Link to="/services">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =========================
            CONTACT INFORMATION
        ========================= */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <div className="footer-contact-list">

            {/* PHONE */}
            <a href="tel:+919876453210">
              <Phone size={17} />
              <span>+91-9876453210</span>
            </a>

            {/* EMAIL */}
            <a href="mailto:hello@gmail.com">
              <Mail size={17} />
              <span>hello@gmail.com</span>
            </a>

            {/* LOCATION */}
            <div className="footer-address">
              <MapPin size={17} />
              <span>Bengaluru, India</span>
            </div>

          </div>

          {/* =========================
              SOCIAL MEDIA
          ========================= */}
          <div className="footer-socials">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={19} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={19} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>

            {/* X / TWITTER */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter size={19} />
            </a>

          </div>
        </div>

      </div>

      {/* =========================
          COPYRIGHT
      ========================= */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Rakesh Events.
          All rights reserved.
        </span>

        <Link to="/contact">
          Get In Touch
          <ArrowUpRight size={14} />
        </Link>

      </div>

    </footer>
  );
}

export default Footer;
