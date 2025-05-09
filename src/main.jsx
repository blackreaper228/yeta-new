import "./style.css";
import "./javascript/horizontal-scroll.js";
import "./javascript/sticky-move.js";
import "./javascript/marquee.js";
import "./javascript/smoothScroll.js";
import "./javascript/mapbox.js";
import "./javascript/industry.js";
import "./javascript/scale.js";
import "./javascript/animation.js";
import "./javascript/no-move.js";

import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./react/navbar.jsx";
import ContactModal from "./react/contactModal.jsx";

const navbarElement = document.querySelector(".my-navbar");
const modalElement = document.querySelector(".ContactModalWrap");

if (navbarElement) {
  const root = createRoot(navbarElement);
  root.render(<Navbar />);
}

if (modalElement) {
  const root = createRoot(modalElement);
  root.render(<ContactModal />);
}
