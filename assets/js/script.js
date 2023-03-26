'use strict';


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the two hero sections
  const hero1 = document.querySelector(".hero");
  const hero2 = document.querySelector(".hero2");

  // Hide the second section
  hero2.style.display = "none";

  // Set an interval to switch between the two sections every 3 seconds
  setInterval(function () {

    // Check which section is currently displayed
    if (hero1.style.opacity === "1") {
      // If the first section is displayed, switch to the second section
      hero1.style.opacity = "0";
      hero2.style.opacity = "1";
      setTimeout(() => { hero1.style.display = "none"; hero2.style.display = "block"; }, 500);
    } else {
      // If the second section is displayed, switch to the first section
      hero1.style.opacity = "1";
      hero2.style.opacity = "0";
      setTimeout(() => { hero2.style.display = "none"; hero1.style.display = "block"; }, 500);
    }
  }, 5000);
  
  });

/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



/**
 * NAVBAR TOGGLER FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);