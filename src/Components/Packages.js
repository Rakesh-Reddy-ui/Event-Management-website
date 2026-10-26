
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Users,
  IndianRupee,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  UsersRound,
  Star,
  Heart,
  Check,
  Sprout,
  Building2,
  Crown,
  Gift,
  Camera,
  Music,
  UtensilsCrossed,
  Cake,
  Flower2,
  Video,
  Mail,
  Sparkles
} from "lucide-react";

import "../CSS/Packages.css";

import Footer from "./Footer";

// PACKAGE CARD IMAGES
// These use existing images from your React public folder.
const packageImages = {
  intimate: [
    "/assets/images/anniversary.png",
    "/assets/images/wedding.png",
    "/assets/images/engagement.png",
    "/assets/images/birthday.jpeg"
  ],
  small: [
    "/assets/images/baby_shower.png",
    "/assets/images/housewarming.png",
    "/assets/images/engagement.png",
    "/assets/images/anniversary.png"
  ],
  medium: [
    "/assets/images/wedding.png",
    "/assets/images/corporate.png",
    "/assets/images/housewarming.png",
    "/assets/images/engagement.png"
  ],
  large: [
    "/assets/images/wedding.png",
    "/assets/images/anniversary.png",
    "/assets/images/engagement.png",
    "/assets/images/corporate.png"
  ],
  extraLarge: [
    "/assets/images/luxury.png",
    "/assets/images/corporate.png",
    "/assets/images/engagement.png",
    "/assets/images/ultimate.png"
  ]
};

// FEATURE LISTS FOR EACH PACKAGE TIER
const packageTiers = [
  {
    id: "essential",
    name: "Essential",
    features: [
      "Basic Decoration",
      "Cake (1 kg)",
      "Food (Veg / Non-Veg)",
      "Photography",
      "Event Coordination",
      "Music / DJ Entertainment",
      "Basic Decoration"
    ]
  },
  {
    id: "classic",
    name: "Classic",
    features: [
      "Premium Decoration",
      "Cake (2 kg)",
      "Food (Veg / Non-Veg)",
      "Photography (3 hrs)",
      "Event Coordination",
      "Music / DJ",
      "Basic Decoration"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    features: [
      "Theme Decoration",
      "Cake (2–3 kg)",
      "Food (Veg / Non-Veg)",
      "Photography & Videography",
      "Event Coordination",
      "Music / DJ Entertainment",
      "Basic Decoration"
    ]
  },
  {
    id: "luxury",
    name: "Luxury",
    features: [
      "Theme Decoration",
      "Cake (2–3 kg)",
      "Food (Veg / Non-Veg)",
      "Photography & Videography",
      "Event Coordination",
      "Music / DJ Entertainment",
      "Music & Entertainment"
    ]
  }
];

// FIVE GUEST-SIZE GROUPS
const packageGroups = [
  {
    id: "intimate",
    title: "Intimate",
    guests: "Up to 50 Guests",
    description:
      "Perfect for cozy celebrations at home, cozy venues or private spaces.",
    icon: Sprout,
    images: packageImages.intimate
  },
  {
    id: "small",
    title: "Small",
    guests: "51 to 100 Guests",
    description:
      "Ideal for birthdays, baby showers, engagements and family celebrations.",
    icon: UsersRound,
    images: packageImages.small
  },
  {
    id: "medium",
    title: "Medium",
    guests: "101 to 500 Guests",
    description:
      "Great for engagements, corporate events and larger celebrations.",
    icon: Building2,
    images: packageImages.medium
  },
  {
    id: "large",
    title: "Large",
    guests: "501 to 1,500 Guests",
    description:
      "Perfect for weddings, grand parties and major corporate events.",
    icon: Crown,
    images: packageImages.large
  },
  {
    id: "extra-large",
    title: "Extra Large",
    guests: "1,500+ Guests",
    description:
      "For extraordinary events, large weddings and massive corporate gatherings.",
    icon: Gift,
    images: packageImages.extraLarge
  }
];

const serviceHighlights = [
  { name: "Decoration", icon: Flower2 },
  { name: "Catering & Food", icon: UtensilsCrossed },
  { name: "Cake & Desserts", icon: Cake },
  { name: "Photography", icon: Camera },
  { name: "Videography", icon: Video },
  { name: "Music & DJ", icon: Music },
  { name: "Venue Booking", icon: Building2 },
  { name: "Entertainment", icon: Sparkles },
  { name: "Invitations", icon: Mail },
  { name: "Return Gifts", icon: Gift },
  { name: "Event Management", icon: UsersRound },
  { name: "Others", icon: Heart }
];

function Packages() {
  const navigate = useNavigate();

  const [eventType, setEventType] = useState("Birthday");
  const [guestCount, setGuestCount] = useState("Up to 50");
  const [budgetRange, setBudgetRange] = useState("30k - 1L");

  // Guest count is applied when the visitor clicks View Packages.
  const [appliedGuestCount, setAppliedGuestCount] =
    useState("All");

  const handleFilter = () => {
    setAppliedGuestCount(guestCount);

    if (guestCount === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const groupId = {
      "Up to 50": "intimate",
      "51 to 100": "small",
      "101 to 500": "medium",
      "501 to 1500": "large",
      "1500+": "extra-large"
    }[guestCount];

    // Scroll after the filtered section is rendered.
    // The results appear directly beneath the filter row.
    if (!groupId) return;
  };

  const filteredGroups =
    appliedGuestCount === "All"
      ? packageGroups
      : packageGroups.filter((group) => {
          const selected = {
            "Up to 50": "intimate",
            "51 to 100": "small",
            "101 to 500": "medium",
            "501 to 1500": "large",
            "1500+": "extra-large"
          }[appliedGuestCount];

          return group.id === selected;
        });

  const handlePackageDetails = (group, tier) => {
    const params = new URLSearchParams({
      event: eventType,
      guests: group.guests,
      budget: budgetRange,
      package: tier.name
    });

    navigate(`/contact?${params.toString()}`);
  };

  return (
    <main className="package-page">

      {/* ======================================
          1. PACKAGES HERO BANNER
      ====================================== */}

      <section
        className="package-hero"
        style={{
          backgroundImage:
            "url('/assets/images/PackageBanner.png')"
        }}
      >
        <div className="package-hero-inner">

          <div className="package-hero-content">
            <span className="package-small-title">
              OUR PACKAGES
            </span>

            <h1>
              Flexible Packages
              <br />
              for Every Celebration
            </h1>

            <p>
              Choose from our curated packages designed
              for every event size, budget and style.
              Let us make your special moments unforgettable.
            </p>
          </div>

          {/* DECORATIVE TEXT */}
          <div className="package-dream-text">
            <span className="package-line">Your Event</span>
            <span className="package-line">Our Priority</span>
            <Heart size={19} strokeWidth={1.8} />
          </div>

          {/* FEATURES AT BOTTOM */}
          <div className="package-hero-features">

            <div className="package-feature">
              <ShieldCheck size={27} />
              <div>
                <h4>End-to-End Planning</h4>
                <p>From concept to completion</p>
              </div>
            </div>

            <div className="package-feature">
              <UsersRound size={27} />
              <div>
                <h4>Trusted Vendors</h4>
                <p>Quality & reliability</p>
              </div>
            </div>

            <div className="package-feature">
              <Star size={27} />
              <div>
                <h4>Customizable Packages</h4>
                <p>As per your budget & needs</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================
          2. FILTER BAR
      ====================================== */}

      <section className="package-filter-section">
        <div className="package-filter-container">

          <div className="package-filter-box">
            <CalendarDays size={20} />

            <div className="package-filter-field">
              <label htmlFor="event-type">
                Event Type
              </label>

              <select
                id="event-type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Baby Shower</option>
                <option>Corporate</option>
                <option>Housewarming</option>
                <option>Other</option>
              </select>
            </div>

            <ChevronDown
              size={14}
              className="package-filter-chevron"
            />
          </div>

          <div className="package-filter-box">
            <Users size={20} />

            <div className="package-filter-field">
              <label htmlFor="guest-count">
                Guest Count
              </label>

              <select
                id="guest-count"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                <option value="All">All Sizes</option>
                <option value="Up to 50">Up to 50</option>
                <option value="51 to 100">51 to 100</option>
                <option value="101 to 500">101 to 500</option>
                <option value="501 to 1500">501 to 1500</option>
                <option value="1500+">1500+</option>
              </select>
            </div>

            <ChevronDown
              size={14}
              className="package-filter-chevron"
            />
          </div>

          <div className="package-filter-box">
            <IndianRupee size={20} />

            <div className="package-filter-field">
              <label htmlFor="budget-range">
                Budget Range
              </label>

              <select
                id="budget-range"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
              >
                <option>Below 30k</option>
                <option>30k - 1L</option>
                <option>1L - 3L</option>
                <option>3L - 5L</option>
                <option>Above 5L</option>
              </select>
            </div>

            <ChevronDown
              size={14}
              className="package-filter-chevron"
            />
          </div>

          <button
            type="button"
            className="package-view-btn"
            onClick={handleFilter}
          >
            View Packages
            <ArrowRight size={17} />
          </button>

        </div>
      </section>

      {/* ======================================
          3. PACKAGE SIZE SECTIONS
      ====================================== */}

      <section className="package-sections">

        {filteredGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <div
              key={group.id}
              id={`package-${group.id}`}
              className={`package-size-section package-size-${group.id}`}
            >
              <div className="package-size-layout">

                {/* LEFT SIZE DESCRIPTION */}
                <div className="package-size-info">

                  <div className="package-size-heading">
                    <GroupIcon
                      size={29}
                      strokeWidth={1.7}
                    />

                    <div>
                      <h2>{group.title}</h2>
                      <span>{group.guests}</span>
                    </div>
                  </div>

                  <p>{group.description}</p>

                </div>

                {/* FOUR PACKAGE TIER CARDS */}
                <div className="package-tier-grid">

                  {packageTiers.map((tier, index) => (
                    <article
                      key={tier.id}
                      className="package-tier-card"
                    >
                      <div className="package-tier-image">
                        <img
                          src={group.images[index]}
                          alt={`${group.title} ${tier.name} package`}
                          loading="lazy"
                        />
                      </div>

                      <div className="package-tier-content">

                        <span
                          className={`package-tier-badge tier-${tier.id}`}
                        >
                          {tier.name}
                        </span>

                        <h3>
                          {tier.name} Package
                        </h3>

                        <ul className="package-tier-features">
                          {tier.features.map((feature, i) => (
                            <li key={`${feature}-${i}`}>
                              <Check
                                size={12}
                                strokeWidth={2}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          className={`package-details-btn tier-${tier.id}-btn`}
                          onClick={() =>
                            handlePackageDetails(group, tier)
                          }
                        >
                          View Details
                          <ArrowRight size={14} />
                        </button>

                      </div>
                    </article>
                  ))}

                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* ======================================
          4. SERVICES CONTACT BANNER
      ====================================== */}

      <section className="package-bottom-cta">

        <div className="package-cta-decoration">
          <span>
            Not sure which
            <br />
            Package is right for you?          
         </span>
          <Heart size={17} />
        </div>

        <div className="package-cta-content">
          <span className="package-cta-label">
            LET'S CELEBRATE
          </span>

          <h2>Tell Us Your Dream Event</h2>

          <p>
            Explore our packages and services or get
            in touch with our team to plan your perfect event.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Request a Custom Quote
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="package-cta-services">
          {serviceHighlights.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <div
                key={service.name}
                className="package-cta-service"
              >
                <ServiceIcon
                  size={18}
                  strokeWidth={1.7}
                />
                <span>{service.name}</span>
              </div>
            );
          })}
        </div>

      </section>

        <Footer />
    </main>
  );
}

export default Packages;
