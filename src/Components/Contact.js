
import React from "react";

import {
  Phone,
  Mail,
  MapPin,
  Heart
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

import "../CSS/Contact.css";
import Footer from "./Footer";

/* ==========================================
   CONTACT INFORMATION
========================================== */

const CONTACT = {
  phone: "+918756753417",
  displayPhone: "+91 8756753417",
  email: "hello@gmail.com",

  address:
    "No. 123 Green Park Road, Bellandur, Bengaluru - 560103, Karnataka, India",

  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/"
};

/* ==========================================
   GOOGLE MAPS LOCATION
========================================== */

const mapQuery = encodeURIComponent(
  "Suyochi Robotics Private Limited, Bengaluru, Karnataka"
);

const mapUrl =
  `https://www.google.com/maps?q=${mapQuery}&t=k&z=17&output=embed`;

/* ==========================================
   CONTACT COMPONENT
========================================== */

function Contact() {
  return (
    <main className="contact-page">

      {/* ==========================================
          1. CONTACT HERO BANNER
      ========================================== */}

      <section
        className="contact-hero"
        style={{
          backgroundImage:
            "url('/assets/images/ContactBanner.png')"
        }}
      >
        <div className="contact-hero-inner">

          {/* LEFT CONTENT */}

          <div className="contact-hero-content">

            <span className="contact-hero-label">
              CONTACT US
            </span>

            <h1>
              Let’s Plan Your
              <br />
              Dream Event Together
            </h1>

            <p>
              Have a question, special request, or want
              to discuss your event? We’d love to hear
              from you! Get in touch with our team, and
              we’ll get back to you as soon as possible.
            </p>

          </div>

          {/* DECORATIVE TEXT */}

          <div className="contact-hero-decoration">

            <span>
              We’re
            </span>

            <span>
              Here to Help
            </span>

            <Heart
              size={19}
              strokeWidth={1.8}
            />

          </div>

        </div>
      </section>

      {/* ==========================================
          2. CONTACT INFORMATION AND MAP
      ========================================== */}

      <section className="contact-main">

        {/* ======================================
            LEFT CONTACT PANEL
        ====================================== */}

        <div className="contact-info-panel">

          <div className="contact-info-inner">

            {/* SECTION HEADING */}

            <span className="contact-section-label">
              GET IN TOUCH
            </span>

            <h2>
              Contact Information
            </h2>

            <p className="contact-intro">
              Reach out to us through any of the channels
              below. We’re always here to help!
            </p>

            {/* CONTACT DETAILS */}

            <div className="contact-detail-list">

              {/* ==================================
                  PHONE
              ================================== */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Phone
                    size={31}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="contact-detail-text">

                  <h3>
                    Phone
                  </h3>

                  <a href={`tel:${CONTACT.phone}`}>
                    {CONTACT.displayPhone}
                  </a>

                  <span>
                    Mon - Sun | 9:00 AM - 9:00 PM
                  </span>

                </div>
              </div>

              {/* ==================================
                  EMAIL
              ================================== */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Mail
                    size={31}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="contact-detail-text">

                  <h3>
                    Email
                  </h3>

                  <a href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>

                  <span>
                    We reply within 24 hours
                  </span>

                </div>
              </div>

              {/* ==================================
                  LOCATION
              ================================== */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <MapPin
                    size={33}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="contact-detail-text">

                  <h3>
                    Our Location
                  </h3>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT.address}
                  </a>

                </div>
              </div>

              {/* ==================================
                  FOLLOW US
              ================================== */}

              <div className="contact-detail">

                {/* INSTAGRAM ICON */}

                <div className="contact-detail-icon">
                  <FaInstagram size={31} />
                </div>

                <div className="contact-detail-text">

                  <h3>
                    Follow Us
                  </h3>

                  <p>
                    Stay Updated with our latest events,
                    ideas and offers.
                  </p>

                  {/* SOCIAL MEDIA LINKS */}

                  <div className="contact-socials">

                    {/* INSTAGRAM */}

                    <a
                      href={CONTACT.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>

                    {/* FACEBOOK */}

                    <a
                      href={CONTACT.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>

                    {/* YOUTUBE */}

                    <a
                      href={CONTACT.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </a>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ======================================
            RIGHT GOOGLE MAP PANEL
        ====================================== */}

        <div className="contact-map-panel">

          <iframe
            title="Suyochi Robotics Location Map"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

        </div>

      </section>
      
      <Footer />
    </main>
  );
}

export default Contact;
