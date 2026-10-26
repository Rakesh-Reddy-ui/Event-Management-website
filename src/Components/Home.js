
import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css";
import Footer from "./Footer";
import {
  Cake,
  Heart,
  HeartHandshake,
  Baby,
  Building2,
  House,
  Ellipsis,
  Gem,
} from "lucide-react";

import {
  Flower2,
  UtensilsCrossed,
  // Cake,
  Camera,
  Video,
  Music,
  // House,
  PartyPopper,
  Mail,
  Gift,
  Users,
  Settings
} from "lucide-react";


// ======================================
// EVENT CATEGORIES
// ======================================

const events = [
  {
    title: "Birthday",
    image: "/assets/images/birthday.jpeg",
    icon: Cake,
  },
  {
    title: "Wedding",
    image: "/assets/images/wedding.png",
    icon: HeartHandshake,
  },
  {
    title: "Engagement",
    image: "/assets/images/engagement.png",
    icon: Gem,
  },
  {
    title: "Anniversary",
    image: "/assets/images/anniversary.png",
    icon: Heart,
  },
  {
    title: "Baby Shower",
    image: "/assets/images/baby_shower.png",
    icon: Baby,
  },
  {
    title: "Corporate",
    image: "/assets/images/corporate.png",
    icon: Building2,
  },
  {
    title: "Housewarming",
    image: "/assets/images/housewarming.png",
    icon: House,
  },
  {
    title: "Other",
    image: "/assets/images/other.png",
    icon: Ellipsis,
  },
];

// ======================================
// FEATURES
// ======================================

const features = [
  {
    icon: "✦",
    title: "End-to-End Planning",
    description:
      "From the first idea to the final celebration, we handle everything.",
  },
  {
    icon: "♡",
    title: "Trusted Vendors",
    description:
      "We work with reliable professionals to deliver quality services.",
  },
  {
    icon: "₹",
    title: "Budget Friendly",
    description:
      "Beautiful events designed according to your budget.",
  },
  {
    icon: "✓",
    title: "Stress-Free Experience",
    description:
      "Enjoy your special day while we manage every detail.",
  },
];

// ======================================
// EVENT PLANNING STEPS
// ======================================

const steps = [
  {
    number: "01",
    title: "Tell Us Your Event",
    description:
      "Share your event type, date, location and requirements.",
  },
  {
    number: "02",
    title: "Select a Package",
    description:
      "Choose a package that matches your budget.",
  },
  {
    number: "03",
    title: "Customize",
    description:
      "Add decoration, food, photography and other services.",
  },
  {
    number: "04",
    title: "We Deliver",
    description:
      "Relax while our team brings your event to life.",
  },
];

// ======================================
// PACKAGES
// ======================================

const packages = [
  {
    title: "Intimate",
    // price: "₹9,999",
    image: "/assets/images/intimate.png",
    description: "Perfect for small celebrations",
  },
  {
    title: "Classic",
    // price: "₹19,999",
    image: "/assets/images/classic.png",
    description: "Beautiful celebrations made simple",
  },
  {
    title: "Ultimate",
    // price: "₹29,999",
    image: "/assets/images/ultimate.png",
    description: "Everything you need for your event",
  },
  {
    title: "Luxury",
    // price: "₹49,999",
    image: "/assets/images/luxury.png",
    description: "Premium event experience",
  },
  {
    title: "Extra Large",
    // price: "₹69,999",
    image: "/assets/images/extra-large.png",
    description: "For grand celebrations",
  },
];

// ======================================
// SERVICES
// ======================================


const services = [
  {
    title: "Decoration",
    icon: Flower2,
  },
  {
    title: "Catering & Food",
    icon: UtensilsCrossed,
  },
  {
    title: "Cake & Desserts",
    icon: Cake,
  },
  {
    title: "Photography",
    icon: Camera,
  },
  {
    title: "Videography",
    icon: Video,
  },
  {
    title: "Music & DJ",
    icon: Music,
  },
  {
    title: "Venue Booking",
    icon: House,
  },
  {
    title: "Entertainment",
    icon: PartyPopper,
  },
  {
    title: "Invitations",
    icon: Mail,
  },
  {
    title: "Return Gifts",
    icon: Gift,
  },
  {
    title: "Event Management",
    icon: Users,
  },
  {
    title: "Others",
    icon: Settings,
  },
];


// ======================================
// RECENT CELEBRATIONS
// ======================================

const recentEvents = [
  {
    title: "Birthday Celebration",
    image: "/assets/images/birthday.jpeg",
  },
  {
    title: "Wedding Celebration",
    image: "/assets/images/wedding.png",
  },
  {
    title: "Engagement Ceremony",
    image: "/assets/images/engagement.png",
  },
  {
    title: "Anniversary Celebration",
    image: "/assets/images/anniversary.png",
  },
  {
    title: "Corporate Event",
    image: "/assets/images/corporate.png",
  },
];

// ======================================
// HOME COMPONENT
// ======================================

function Home() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // const handleClick = () => {
  //   navigate("/Event")
  // }

  // const handleOnClick = () => {
  //   navigate("/Gallery")
  // }

  return (
    <main className="home-page">

      {/* ======================================
          1. HERO SECTION
      ====================================== */}

      <section className="hero-section" id="home">

        {/* LEFT BLACK SECTION */}
        <div className="hero-left">

          <div className="hero-content">

            <p className="hero-small-text">
              COMPLETE EVENT PLANNING & EXECUTION
            </p>

            <h1>
              Your Budget.
              <br />
              Our Plan.
              <br />
              <span>Your Perfect Event.</span>
            </h1>

            <p className="hero-description">
              From intimate celebrations to grand occasions,
              we bring decoration, food, cakes, photography,
              entertainment and more — all under one plan.
            </p>

            <div className="hero-buttons">

              <button
                type="button"
                className="primary-button"
                onClick={() => goToPage("/contact")}
              >
                Plan Your Event
                <span>➜</span>
              </button>

              <button
                type="button"
                className="outline-button"
                onClick={() => goToPage("/packages")}
              >
                Explore Packages
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hero-right">

          <img
            src="/assets/images/hero.jpg"
            alt="Beautiful wedding event decoration"
            className="hero-image"
          />

          <div className="hero-heart">♡</div>

        </div>
      </section>

      {/* ======================================
          2. EVENTS SECTION
      ====================================== */}

      <section
        className="events-section section-container"
        id="events"
      >

        <div className="section-heading">
          <h2>What Kind of Event Are You Planning?</h2>

          <p>
            Choose your event type and let us create a personalized experience.
          </p>

        </div>

        
        <div className="event-grid">
          {events.map((event) => {
            const EventIcon = event.icon;

            return (
              <div className="event-card" key={event.title}>

                <div className="event-image">
                  <img
                    onClick={() => goToPage("/event")}
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />
                </div>

                {/* Circular icon overlapping image */}
                <div className="event-icon-circle">
                  <EventIcon
                    size={22}
                    strokeWidth={2}
                  />
                </div>

                <h3>{event.title}</h3>

              </div>
            );
          })}
        </div>


        {/* <div className="home-center-action">
          <button
            type="button"
            className="home-pink-button"
            onClick={() => goToPage("/event")}
          >
            Explore All Events →
          </button>
        </div> */}

      </section>

      {/* ======================================
          3. WHY CHOOSE US
      ====================================== */}

      <section className="why-section" id="about">

        <div className="section-container">

          <div className="section-heading">
            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>We Make Events Special</h2>

            <p>
              We make every celebration simple,
              beautiful and memorable.
            </p>
          </div>

          <div className="why-grid">

            {features.map((feature) => (

              <div className="why-card" key={feature.title}>

                <div className="why-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          4. HOW IT WORKS
      ====================================== */}

      <section className="how-section">

        <div className="section-container">

          <div className="section-heading">
            <span className="section-label">
              SIMPLE PROCESS
            </span>

            <h2>How It Works</h2>

            <p>
              Planning your perfect event is just
              four simple steps.
            </p>
          </div>

          <div className="steps-grid">

            {steps.map((step) => (

              <div className="step-card" key={step.number}>

                <div className="step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          5. PACKAGES SECTION
      ====================================== */}

      <section
        className="packages-section section-container"
        id="packages"
      >

        <div className="section-heading package-heading">

          <div>
            <span className="section-label">
              CHOOSE YOUR PACKAGE
            </span>

            <h2>Popular Packages</h2>
          </div>

          <button
            type="button"
            className="view-all-button"
            onClick={() => goToPage("/packages")}
          >
            View All Packages →
          </button>

        </div>

        <div className="package-grid">

          {packages.map((item) => (

            <div className="package-card" key={item.title}>

              <div className="package-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="package-price">
                  {item.price}
                </span>

              </div>

              <div className="package-content">

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <button
                  type="button"
                  onClick={() => goToPage("/packages")}
                >
                  Explore Package →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ======================================
          6. SERVICES SECTION
      ====================================== */}

      <section className="services-section" id="services">

        <div className="section-container services-layout">

          {/* LEFT SIDE */}
          <div className="services-left">

            <h2>Our Services</h2>

            <p>
              Everything you need for a flawless event
            </p>

            <button
              type="button"
              className="services-explore-btn"
              onClick={() => goToPage("/services")}
            >
              Explore All Services
              <span>➜</span>
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="services-right">

            <div className="services-icon-grid">

              {services.map((service) => {
                const ServiceIcon = service.icon;

                return (
                  <div
                    className="service-icon-item"
                    key={service.title}
                  >
                    <ServiceIcon
                      size={25}
                      strokeWidth={1.8}
                      className="service-line-icon"
                      aria-hidden="true"
                    />

                    <h3>{service.title}</h3>
                  </div>
                );
              })}

            </div>

          </div>
        </div>

      </section>

      {/* ======================================
          7. RECENT CELEBRATIONS
      ====================================== */}

      <section
        className="recent-section section-container"
        id="gallery"
      >

        <div className="section-heading recent-heading">

          <div>
            <span className="section-label">
              OUR WORK
            </span>

            <h2>Recent Celebrations</h2>
          </div>

          <button
            type="button"
            className="view-all-button"
            onClick={() => goToPage("/gallery")}
          >
            View Gallery →
          </button>

        </div>

        <div className="recent-grid">

          {recentEvents.map((event) => (

            <div className="recent-card" key={event.title}>

              <img
                onClick={() => goToPage("/gallery")}
                src={event.image}
                alt={event.title}
                loading="lazy"
              />

              <div className="recent-overlay">
                <h3>{event.title}</h3>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ======================================
          8. CONTACT CALL TO ACTION
      ====================================== */}

      {/* <section className="contact-section" id="contact">

        <div className="contact-content">

          <span className="section-label">
            LET'S PLAN TOGETHER
          </span>

          <h2>
            Ready to Plan Your
            <span> Perfect Event?</span>
          </h2>

          <p>
            Tell us your dream event and we'll turn
            it into reality.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() => goToPage("/contact")}
          >
            Plan Your Event →
          </button>

        </div>

      </section> */}

      <Footer />

    </main>
  );
}

export default Home;
