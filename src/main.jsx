import "./stylesheets/reset.css";
import "./style.css";
import "./stylesheets/fonts.css";
import "./stylesheets/typekit.css";
import "./stylesheets/basics.css";
import "./stylesheets/vars.css";
import "./stylesheets/responsive.css";

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
import Burger from "./react/burgerMenu.jsx";
import ContactModal from "./react/contactModal.jsx";

const navbarElement = document.querySelector(".my-navbar");
const modalElement = document.querySelector(".ContactModalWrap");
const BurgerMenuModal = document.querySelector(".BurgerMenuWrap");

if (navbarElement) {
  const root = createRoot(navbarElement);
  root.render(<Navbar />);
}

if (modalElement) {
  const root = createRoot(modalElement);
  root.render(<ContactModal />);
}

if (BurgerMenuModal) {
  const root = createRoot(BurgerMenuModal);
  root.render(<Burger />);
}
