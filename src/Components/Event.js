
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Event.css";
import Footer from "./Footer";


import {
  Cake,
  HeartHandshake,
  Gem,
  Heart,
  Baby,
  Building2,
  House,
  Flower2,
  Ellipsis,
  ArrowRight
} from "lucide-react";



const eventData = [
  {
    id: 1,
    name: "Birthday",
    category: "Personal",
    image: "/assets/images/birthday.jpeg",
    icon: Cake,
    description:
      "Make birthdays extra special with creative themes and delightful experiences."
  },
  {
    id: 2,
    name: "Wedding",
    category: "Wedding",
    image: "/assets/images/wedding.png",
    icon: HeartHandshake,
    description:
      "From intimate ceremonies to grand celebrations, we make your big day magical."
  },
  {
    id: 3,
    name: "Engagement",
    category: "Wedding",
    image: "/assets/images/engagement.png",
    icon: Gem,
    description:
      "Celebrate the beginning of a new journey with elegance and style."
  },
  {
    id: 4,
    name: "Anniversary",
    category: "Personal",
    image: "/assets/images/anniversary.png",
    icon: Heart,
    description:
      "Relive your special moments with beautifully planned surprises."
  },
  {
    id: 5,
    name: "Baby Shower",
    category: "Personal",
    image: "/assets/images/baby_shower.png",
    icon: Baby,
    description:
      "Welcome your little one with love, joy and beautiful arrangements."
  },
  {
    id: 6,
    name: "Corporate",
    category: "Corporate",
    image: "/assets/images/corporate.png",
    icon: Building2,
    description:
      "Professional events that inspire, connect and create impact."
  },
  {
    id: 7,
    name: "Housewarming",
    category: "Personal",
    image: "/assets/images/housewarming.png",
    icon: House,
    description:
      "Begin a new chapter with warmth and memorable celebrations."
  },
  {
    id: 8,
    name: "Haldi",
    category: "Wedding",
    image: "/assets/images/haldi.png",
    icon: Flower2,
    description:
      "Fill your celebration with colors, traditions and endless happiness."
  },
  {
    id: 9,
    name: "Other",
    category: "Other",
    image: "/assets/images/other.png",
    icon: Ellipsis,
    description:
      "Have something else in mind? We plan unique events just for you."
  }
];

const categories = [
  "All Events",
  "Personal",
  "Wedding",
  "Corporate",
  "Other"
];

const planningSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us about your event, date, location and expectations."
  },
  {
    number: "02",
    title: "Choose Your Package",
    description:
      "Find the best package and services according to your budget."
  },
  {
    number: "03",
    title: "Customize Your Event",
    description:
      "Select decorations, food, entertainment and other arrangements."
  },
  {
    number: "04",
    title: "Enjoy the Celebration",
    description:
      "Our team handles everything while you enjoy your special day."
  }
];

function Event() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Events");

  const navigate = useNavigate();

  const filteredEvents =
    selectedCategory === "All Events"
      ? eventData
      : eventData.filter(
          (event) => event.category === selectedCategory
        );

  const handleEnquiry = (eventName) => {
    navigate(
      `/contact?event=${encodeURIComponent(eventName)}`
    );
  };

  return (
    <main className="events-page">

      {/* ==========================================
          1. FIGMA EVENTS BANNER
      ========================================== */}

      <section
        className="events-hero"
        style={{
          backgroundImage:
            "url('/assets/images/EventBanner.png')"
        }}
      >
        <div className="events-hero-inner">
          <div className="events-hero-content">

            <span className="events-small-title">
              OUR EVENTS
            </span>

            <h1>
              Celebrate Every
              <br />
              Special Moment
            </h1>

            <p>
              From intimate gatherings to grand
              celebrations, we plan and execute every
              type of event with creativity, care
              and perfection.
            </p>

          </div>

          <div className="events-dream-text">
            <span className="dream-line_1">Your</span>
            <span className="dream-line">Dream Event</span>
            <span className="dream-line">
              Starts Here 
            </span>
            <span className="events-dream-dots">........ <span className="events-dream-heart">♡</span></span>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. EVENT CATEGORIES
      ========================================== */}

      <section className="events-intro events-container">

        <div className="events-section-heading">
          <span>EXPLORE OUR EVENTS</span>

          <h2>
            Celebrations Made <em>Beautiful</em>
          </h2>

          <p>
            From intimate gatherings to grand celebrations,
            our team brings creativity, planning and care
            to every occasion.
          </p>
        </div>

        <div className="events-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "events-filter-btn active"
                  : "events-filter-btn"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="events-grid">
        {filteredEvents.map((event) => {
          const EventIcon = event.icon;

          return (
            <article
              className="events-card"
              key={event.id}
            >

              {/* EVENT IMAGE */}
              <div className="events-card-image">
                <img
                  src={event.image}
                  alt={event.name}
                  loading="lazy"
                />

                {/* PINK CIRCULAR EVENT ICON */}
                <div className="events-card-icon">
                  <EventIcon
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="events-card-body">

                <h3>{event.name}</h3>

                <p>{event.description}</p>

                {/* BOTTOM RIGHT ARROW */}
                <button
                  type="button"
                  className="events-card-arrow"
                  onClick={() => handleEnquiry(event.name)}
                  aria-label={`Plan ${event.name} event`}
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </button>

              </div>

            </article>
          );
        })}
      </div>
      </section>

      {/* ==========================================
          3. EVENT PLANNING PROCESS
      ========================================== */}

      <section className="events-process">
        <div className="events-container">

          <div className="events-section-heading">
            <span>HOW WE WORK</span>

            <h2>Our Simple Planning Process</h2>

            <p>
              Making your special occasion effortless
              from beginning to end.
            </p>
          </div>

          <div className="events-process-grid">
            {planningSteps.map((step) => (
              <div
                className="events-process-card"
                key={step.number}
              >
                <div className="events-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CONTACT SECTION
      ========================================== */}

      <section className="events-cta">
        <div className="events-container">

          <span>LET'S CREATE MEMORIES</span>

          <h2>Have a Special Event in Mind?</h2>

          <p>
            Tell us what you're planning and our team
            will help bring your celebration to life.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Plan Your Event →
          </button>

        </div>
      </section>
      <Footer />

    </main>
  );
}

export default Event;
