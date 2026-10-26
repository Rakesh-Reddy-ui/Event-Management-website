
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Flower2,
  UtensilsCrossed,
  Cake,
  Camera,
  Video,
  Music,
  House,
  PartyPopper,
  Mail,
  Gift,
  UsersRound,
  Heart,
  ArrowRight,
  CircleArrowRight,
  BadgeCheck,
  Lightbulb,
  Headphones,
  Handshake,
//   Target,
  ClipboardList,
  CircleCheck,
//   Sparkles
} from "lucide-react";

import "../CSS/Service.css";
import Footer from "./Footer";

// SERVICE CARDS
const serviceData = [
  {
    id: 1,
    name: "Decoration",
    image: "/assets/images/decoration.png",
    description: "Beautiful themes, stage setups and floral decorations.",
    icon: Flower2
  },
  {
    id: 2,
    name: "Catering & Food",
    image: "/assets/images/catering_food.png",
    description: "Delicious menus for every taste and occasion.",
    icon: UtensilsCrossed
  },
  {
    id: 3,
    name: "Cake & Desserts",
    image: "/assets/images/cake.png",
    description: "Custom cakes, desserts and sweet memories.",
    icon: Cake
  },
  {
    id: 4,
    name: "Photography",
    image: "/assets/images/photography.png",
    description: "Capture your precious moments beautifully.",
    icon: Camera
  },
  {
    id: 5,
    name: "Videography",
    image: "/assets/images/videography.png",
    description: "Highlight videos and full event coverage.",
    icon: Video
  },
  {
    id: 6,
    name: "Music & DJ",
    image: "/assets/images/music_dj.png",
    description: "DJ, live music and entertainment systems.",
    icon: Music
  },
  {
    id: 7,
    name: "Venue Booking",
    image: "/assets/images/venue_booking.png",
    description: "Find the perfect venue for your dream event.",
    icon: House
  },
  {
    id: 8,
    name: "Entertainment",
    image: "/assets/images/entertainment.png",
    description: "Dancers, artists, games and fun activities.",
    icon: PartyPopper
  },
  {
    id: 9,
    name: "Invitations",
    image: "/assets/images/invitations.png",
    description: "Digital and printed invitations designed beautifully.",
    icon: Mail
  },
  {
    id: 10,
    name: "Return Gifts",
    image: "/assets/images/return_gifts.png",
    description: "Thoughtful return gifts for your guests.",
    icon: Gift
  },
  {
    id: 11,
    name: "Event Management",
    image: "/assets/images/event_management.png",
    description: "Complete planning and coordination, stress-free.",
    icon: UsersRound
  },
  {
    id: 12,
    name: "Anniversary",
    image: "/assets/images/anniversary.png",
    description: "Relive your special moments with beautifully planned surprises.",
    icon: Heart
  }
];

// SIX WHY CHOOSE US CARDS
const serviceBenefits = [
  {
    title: "Personalized Planning",
    icon: Heart,
    description: "Tailored solutions for your unique style and vision."
  },
  {
    title: "Trusted Vendors",
    icon: UsersRound,
    description: "Access to verified and experienced professionals."
  },
  {
    title: "End-to-End Coordination",
    icon: BadgeCheck,
    description: "We handle everything so you can relax and enjoy."
  },
  {
    title: "Creative Concepts",
    icon: Lightbulb,
    description: "Fresh ideas to make your celebration truly special."
  },
  {
    title: "Transparent Pricing",
    icon: Handshake,
    description: "Clear packages with no hidden costs."
  },
  {
    title: "Dedicated Support",
    icon: Headphones,
    description: "Our team is always here for you, before, during and after."
  }
];

// PLANNING PROCESS
const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    icon: Lightbulb,
    description: "Tell us about your event and vision."
  },
  {
    number: "02",
    title: "Plan Together",
    icon: ClipboardList,
    description: "We suggest ideas, customize the plan."
  },
  {
    number: "03",
    title: "Confirm & Prepare",
    icon: CircleCheck,
    description: "We coordinate with vendors and handle details."
  },
  {
    number: "04",
    title: "Bring It to Life",
    icon: PartyPopper,
    description: "Our team executes everything seamlessly."
  },
  {
    number: "05",
    title: "Create Memories",
    icon: Heart,
    description: "You enjoy the celebration, we make it unforgettable."
  }
];

function Service() {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate(
      `/contact?service=${encodeURIComponent(service.name)}`
    );
  };

  return (
    <main className="services-page">

      {/* ====================================
          1. SERVICES HERO
      ==================================== */}

      <section
        className="services-page-hero"
        style={{
          backgroundImage:
            "url('/assets/images/ServicesBanner.png')"
        }}
      >
        <div className="services-page-hero-inner">

          <div className="services-page-hero-content">
            <span className="services-page-label">
              OUR SERVICES
            </span>

            <h1>
              Everything You Need
              <br />
              For Your Perfect Celebration
            </h1>

            <p>
              For beautiful decoration to delicious food,
              photography and complete event coordination –
              we take care of every detail, so you can enjoy
              what truly matters.
            </p>
          </div>

          <div className="services-page-hero-decoration">
            <span>Beautiful</span>
            <span>Events</span>
            <span>Happier People</span>
            <Heart size={18} />
          </div>

        </div>
      </section>

      {/* ====================================
          2. OUR SERVICES
      ==================================== */}

      <section className="services-page-catalog">
        <div className="services-page-container">

          <div className="services-page-heading">
            <span>OUR SERVICES</span>

            <h2>
              Professional Services for Every Special Moment
            </h2>

            <p>
              From planning to execution, we offer
              end-to-end services to make your event extraordinary.
            </p>
          </div>

          <div className="services-page-grid">
            {serviceData.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  className="services-page-card"
                  key={service.id}
                >
                  <div className="services-page-card-image">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                    />

                    <span className="services-page-card-icon">
                      <ServiceIcon
                        size={20}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <div className="services-page-card-content">
                    <h3>{service.name}</h3>

                    <p>{service.description}</p>

                    <button
                      type="button"
                      className="services-page-card-arrow"
                      aria-label={`Enquire about ${service.name}`}
                      onClick={() =>
                        handleServiceClick(service)
                      }
                    >
                      <CircleArrowRight size={20} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ====================================
          3. WHY CHOOSE OUR SERVICES
      ==================================== */}

      <section
        className="services-page-benefits"
        // style={{
        //   backgroundImage:
        //     "url('/assets/images/Banner_1.png')"
        // }}
      >
        <div className="services-page-container">

          <div className="services-page-heading">
            <h2>Why Choose Our Services</h2>

            <p>
              We go beyond just service – we create
              experiences filled with care, creativity
              and commitment.
            </p>
          </div>

          <div className="services-page-benefits-grid">
            {serviceBenefits.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <article
                  className="services-page-benefit-card"
                  key={benefit.title}
                >
                  <BenefitIcon
                    size={26}
                    strokeWidth={1.8}
                  />

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ====================================
          4. OUR PROCESS
      ==================================== */}

      <section className="services-page-process">
        <div className="services-page-container">

            {/* SECTION HEADING */}
            <div className="services-page-heading">
            <span>OUR PROCESS</span>

            <h2>
                From Your Idea to a Beautiful Celebration
            </h2>

            <p>
                A simple and seamless journey,
                designed to turn your vision into reality.
            </p>
            </div>

            {/* PROCESS CONTENT */}
            <div className="services-process-layout">

            {/* LEFT DECORATIVE TEXT */}
            <div className="services-process-decoration">
                <span className="services-process-dream-line">
                Your Vision
                </span>

                <span className="services-process-dream-line">
                Our Planning
                </span>

                <span className="services-process-dream-line">
                Beautiful Moments
                </span>

                <Heart
                size={19}
                strokeWidth={1.7}
                />
            </div>

            {/* FIVE PROCESS STEPS */}
            <div className="services-page-steps">

                {processSteps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                    <React.Fragment key={step.number}>

                    <div className="services-page-step">

                        <StepIcon
                        size={22}
                        strokeWidth={1.7}
                        />

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                    </div>

                    {index < processSteps.length - 1 && (
                        <ArrowRight
                        className="services-page-step-arrow"
                        size={27}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        />
                    )}

                    </React.Fragment>
                );
                })}

            </div>

            </div>

        </div>
      </section>


      {/* ====================================
          5. CUSTOM PACKAGE BANNER
      ==================================== */}

      <section
        className="services-page-cta"
        // style={{
        //   backgroundImage:
        //     "url('/assets/images/Banner.png')"
        // }}
      >
        <h2>Need a customized package</h2>

        <p>
          Tell us your requirements and our team will
          create the perfect plan for you
        </p>

        <button
          type="button"
          onClick={() => navigate("/contact")}
        >
          Request a Custom Quote
          <ArrowRight size={17} />
        </button>
      </section>

        <Footer />
    </main>
  );
}

export default Service;
