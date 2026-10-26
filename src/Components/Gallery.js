
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import {
  LayoutGrid,
  Cake,
  HeartHandshake,
  Gem,
  Heart,
  Baby,
  Building2,
  House,
  Flower2,
  ArrowRight,
  CircleArrowRight
} from "lucide-react";

import "../CSS/Gallery.css";

// Gallery categories
const galleryCategories = [
  { id: "All", name: "All", icon: LayoutGrid },
  { id: "Birthday", name: "Birthday", icon: Cake },
  { id: "Wedding", name: "Wedding", icon: HeartHandshake },
  { id: "Engagement", name: "Engagement", icon: Gem },
  { id: "Anniversary", name: "Anniversary", icon: Heart },
  { id: "Baby Shower", name: "Baby Shower", icon: Baby },
  { id: "Corporate", name: "Corporate", icon: Building2 },
  { id: "Housewarming", name: "Housewarming", icon: House },
  { id: "Haldi", name: "Haldi", icon: Flower2 }
];

// Gallery images
const galleryEvents = [
  {
    id: 1,
    title: "Birthday Celebration",
    category: "Birthday",
    image: "/assets/images/birthday.jpeg"
  },
  {
    id: 2,
    title: "Wedding Celebration",
    category: "Wedding",
    image: "/assets/images/wedding.png"
  },
  {
    id: 3,
    title: "Engagement Celebration",
    category: "Engagement",
    image: "/assets/images/engagement.png"
  },
  {
    id: 4,
    title: "Anniversary Celebration",
    category: "Anniversary",
    image: "/assets/images/anniversary.png"
  },
  {
    id: 5,
    title: "Baby Shower Celebration",
    category: "Baby Shower",
    image: "/assets/images/baby_shower.png"
  },
  {
    id: 6,
    title: "Corporate Celebration",
    category: "Corporate",
    image: "/assets/images/corporate.png"
  },
  {
    id: 7,
    title: "Housewarming Celebration",
    category: "Housewarming",
    image: "/assets/images/housewarming.png"
  },
  {
    id: 8,
    title: "Haldi Celebration",
    category: "Haldi",
    image: "/assets/images/haldi.png"
  }
];

function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery =
    activeCategory === "All"
      ? galleryEvents
      : galleryEvents.filter(
          (event) => event.category === activeCategory
        );

  const handleGalleryClick = (event) => {
    navigate(
      `/contact?event=${encodeURIComponent(event.category)}`
    );
  };

  return (
    <main className="gallery-page">

      {/* ====================================
          1. GALLERY HERO BANNER
      ==================================== */}

      <section
        className="gallery-hero"
        style={{
          backgroundImage:
            "url('/assets/images/GalleryBanner.png')"
        }}
      >
        <div className="gallery-hero-inner">

          {/* LEFT CONTENT */}
          <div className="gallery-hero-content">

            <span className="gallery-small-title">
              OUR GALLERY
            </span>

            <h1>
              Moments we’ve created.
              <br />
              Memories you’ll cherish.
            </h1>

            <p>
              Explore our collection of beautiful events,
              from intimate gatherings to grand celebrations.
              Each photo tells a story of joy, love and
              unforgettable moments.
            </p>
          </div>

          {/* DECORATIVE TEXT */}
          {/* <div className="gallery-dream-text">
            <span className="gallery-dream-line">
              Every
            </span>
            <span className="gallery-dream-line">
              Moment
            </span>
            <span className="gallery-dream-line">
              Matters ♡
            </span>
            <span className="gallery-dream-dots">
              ........
            </span>
          </div> */}

          <div className="gallery-dream-text">
            <span className="gallery-line_1">Every</span>
            <span className="gallery-line">Moment</span>
            <span className="gallery-line">
              Matters
            </span>
            <span className="gallery-dream-dots">........ <span className="gallery-dream-heart">♡</span></span>
          </div>

        </div>
      </section>

      {/* ====================================
          2. GALLERY FILTERS AND CARDS
      ==================================== */}

      <section className="gallery-main-section">
        <div className="gallery-container">

          {/* CATEGORY FILTERS */}
          <div className="gallery-filters">
            {galleryCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <button
                  type="button"
                  key={category.id}
                  className={
                    activeCategory === category.id
                      ? "gallery-filter active"
                      : "gallery-filter"
                  }
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  aria-pressed={
                    activeCategory === category.id
                  }
                >
                  <CategoryIcon
                    size={19}
                    strokeWidth={1.8}
                  />

                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* GALLERY CARDS */}
          <div className="gallery-grid">
            {filteredGallery.map((event) => (
              <article
                className="gallery-card"
                key={event.id}
              >
                <div className="gallery-card-image">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />

                  <span className="gallery-card-category">
                    {event.category}
                  </span>
                </div>

                <div className="gallery-card-content">
                  <h3>{event.title}</h3>

                  <button
                    type="button"
                    className="gallery-card-arrow"
                    onClick={() => handleGalleryClick(event)}
                    aria-label={`Enquire about ${event.category}`}
                  >
                    <CircleArrowRight
                      size={22}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ====================================
          3. BOTTOM CTA BANNER
      ==================================== */}

      <section
        className="gallery-bottom-cta"
        // style={{
        //   backgroundImage:
        //     "url('/assets/images/Banner.png')"
        // }}
      >
        <div className="gallery-cta-left">
          <span>
            Let’s make your
            <br />
            next event special!
          </span>

          <Heart size={22} strokeWidth={1.8} />
        </div>

        <div className="gallery-cta-content">

          <h2>
            Ready to Create Your Own Beautiful Memories?
          </h2>

          <p>
            Explore our packages and services or get in
            touch with our team to plan your perfect event.
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

export default Gallery;
