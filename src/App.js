// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Event from './Components/Event';
// import './App.css';

// function App() {
//   return (
//    <div className="App">
//       <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/event" element={<Event/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation
} from "react-router-dom";
// import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Event from "./Components/Event";
import Packages from "./Components/Packages";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import "./App.css";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <ScrollToTop /> */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/packages" element={<Packages />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
