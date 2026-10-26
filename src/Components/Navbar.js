// // import React, { useState } from "react";
// // import "../CSS/Navbar.css";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header className="navbar">
// //       <div className="container nav-container">

// //         <div className="logo">
// //           <div className="logo-icon">R</div>

// //           <div className="logo-text">
// //             <strong>Rakesh</strong>
// //             <span>.Event .Planners</span>
// //           </div>
// //         </div>

// //         <div className="hamburger" onClick={() => setOpen(!open)}>
// //             ☰
// //         </div>

// //         <nav className={`nav-links ${open ? "open" : ""}`}>
// //           <a href="#home" onClick={() => setOpen(false)}>Home</a>
// //           <a href="#events" onClick={() => setOpen(false)}>Events</a>
// //           <a href="#packages" onClick={() => setOpen(false)}>Packages</a>
// //           <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
// //           <a href="#about" onClick={() => setOpen(false)}>About Us</a>
// //           <a href="#services" onClick={() => setOpen(false)}>Services</a>
// //           <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
// //         </nav>

// //         <button className="nav-button">
// //           Plan Your Event
// //         </button>

// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;




// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import "../CSS/Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const closeMenu = () => {
//     setOpen(false);
//     window.scrollTo(0, 0);
//   };

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Events", path: "/event" },
//     { name: "Packages", path: "/packages" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="navbar">
//       <div className="container nav-container">

//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="logo"
//           onClick={closeMenu}
//         >
//           <div className="logo-icon">R</div>

//           <div className="logo-text">
//             <strong>Rakesh</strong>
//             <span>.Event .Planners</span>
//           </div>
//         </NavLink>

//         {/* Mobile Menu */}
//         <button
//           type="button"
//           className="hamburger"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle navigation"
//           aria-expanded={open}
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <nav className={`nav-links ${open ? "open" : ""}`}>
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={closeMenu}
//               className={
//                 location.pathname === item.path
//                   ? "active"
//                   : ""
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Plan Your Event */}
//         <NavLink
//           to="/contact"
//           className="nav-button"
//           onClick={closeMenu}
//         >
//           Plan Your Event
//         </NavLink>

//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/event" },
  { name: "Packages", path: "/packages" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="Rakesh Events Home"
        >
          <div className="logo-icon">R</div>

          <div className="logo-text">
            <strong>Rakesh</strong>
            <span>.Event .Planners</span>
          </div>
        </NavLink>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* NAVIGATION LINKS */}
        <nav
          id="main-navigation"
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* PLAN YOUR EVENT BUTTON */}
        <NavLink
          to="/contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Plan Your Event
        </NavLink>

      </div>
    </header>
  );
};

export default Navbar;
