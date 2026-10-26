
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Target,
  Eye,
  BadgeCheck,
  UsersRound,
  Heart,
  Check,
  ArrowRight
} from "lucide-react";

import "../CSS/About.css";
import Footer from "./Footer";

const missionValues = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To make event planning simple, joyful and accessible to everyone."
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To be the most trusted and loved event planning platform in the world."
  },
  {
    title: "Our Values",
    icon: BadgeCheck,
    description:
      "Creativity, Integrity, Customer Happiness and Excellence."
  },
  {
    title: "Our People",
    icon: UsersRound,
    description:
      "A passionate team dedicated to bringing your dream events to life."
  }
];

const whyChooseUs = [
  "Personalized Planning",
  "Trusted Vendors",
  "End-to-End Support",
  "Memorable Experiences"
];

function About() {
  const navigate = useNavigate();

  return (
    <main className="about-page">

      {/* ====================================
          1. ABOUT US HERO
      ==================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage:
            "url('/assets/images/AboutBanner.png')"
        }}
      >
        <div className="about-hero-inner">

          <div className="about-hero-content">

            <span className="about-small-title">
              ABOUT US
            </span>

            <h1>
              More Than Events,
              <br />
              We Create Life’s
              <br />
              Most Beautiful Moments.
            </h1>

            <p>
              At Celebrify, we believe every celebration
              has a story. Our passion is to turn your
              ideas into extraordinary experiences
              filled with joy, beauty, and unforgettable
              memories.
            </p>

          </div>

          <div className="about-hero-decoration">
            <span>Celebrations</span>
            <span>Make life</span>
            <span>Brighter ♡</span>
            <span className="about-decor-dots">........<span className="about-dream-heart">♡</span></span>
          </div>

        </div>
      </section>

      {/* ====================================
          2. OUR STORY
      ==================================== */}

      <section className="about-story">
        <div className="about-container about-story-layout">

          <div className="about-story-image">
            <img
              src="/assets/images/AboutStory.png"
              alt="Elegant event table decorated with flowers"
              loading="lazy"
            />

            <div className="about-story-decoration">
              <span>
                Designing
                <br />
                Moments 
                <br />
                That Matter
              </span>

              <span className="about-dream-dots">........<Heart size={23} strokeWidth={1.7} /></span>
            </div>
          </div>

          <div className="about-story-content">

            <span className="about-section-label">
              OUR STORY
            </span>

            <h2>
              From a Sample Idea
              <br />
              to Celebrifying Lives
            </h2>

            <p>
              Celebrify began with a simple idea –
              to make event planning easy, beautiful
              and stress-free for everyone. What started
              as a small team of passionate event lovers
              has now grown into a trusted platform,
              helping individuals and businesses celebrate
              life's special moments across the country.
            </p>

            <p>
              Today, we are proud to be part of thousands
              of celebrations – from intimate gatherings
              to grand events – creating memories that
              last a lifetime.
            </p>

          </div>

        </div>
      </section>

      {/* ====================================
          3. MISSION AND VALUES
      ==================================== */}

      <section className="about-mission">
        <div className="about-container">

          <div className="about-section-heading">

            <span className="about-section-label">
              OUR MISSION & VALUES
            </span>

            <h2>What Drives Us</h2>

            <p>
              We are committed to making every celebration
              extraordinary through creativity, reliability
              and personal touch.
            </p>

          </div>

          <div className="about-values-grid">

            {missionValues.map((item) => {
              const ValueIcon = item.icon;

              return (
                <article
                  className="about-value-card"
                  key={item.title}
                >
                  <ValueIcon
                    size={35}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ====================================
          4. WHY CHOOSE US
      ==================================== */}

      <section className="about-why">
        <div className="about-container about-why-layout">

          <div className="about-why-content">

            <span className="about-section-label">
              WHY CHOOSE CELEBRIFY
            </span>

            <h2>
              Because Your Happiness
              <br />
              Matters
            </h2>

            <p>
              We go beyond just planning events.
              We create experiences that reflect
              your unique style and vision, with
              attention to every detail.
            </p>

            <ul className="about-why-list">
              {whyChooseUs.map((item) => (
                <li key={item}>
                  <span className="about-why-check">
                    <Check
                      size={12}
                      strokeWidth={3}
                    />
                  </span>

                  {item}
                </li>
              ))}
            </ul>

            <div className="about-why-decoration">
              <span>Your Vision</span>
              <span>Our Passion</span>
              <Heart size={21} />
            </div>

          </div>

          <div className="about-why-image">
            <img
              src="/assets/images/AboutWhyChoose.png"
              alt="Elegant celebration stage with floral decorations"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ====================================
          5. LET'S CELEBRATE TOGETHER
      ==================================== */}

      <section className="about-cta-section">

        <div className="about-cta-banner" >

          <h2>Let’s Celebrate Together</h2>

          <p>
            Tell us your dream event and let our team
            turn it into a beautiful reality.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Plan Your Event
            <ArrowRight size={17} />
          </button>

        </div>

      </section>

        <Footer />
    </main>
  );
}

export default About;
