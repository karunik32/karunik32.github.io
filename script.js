console.log("Hello Samrat Happy Hacking!");

/*

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const list = document.querySelector(".list");

// We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
  // Based on the direction we call `scrollBy` with the item width we got earlier
  if (direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}

// Automatic sliding function
function autoSlide() {
  handleClick("next"); // Scroll to the next item
}

// Set interval for auto sliding (e.g., every 3 seconds)
setInterval(autoSlide, 3000);
*/

console.log("Hello Samrat Happy Hacking!");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const itemWidth = items[0].offsetWidth;

let currentIndex = 0;
let directionForward = true; // To track the direction of sliding
let autoSlideInterval; // To store the interval ID

// Automatically count the total number of slides
const totalSlides = items.length;
document.getElementById("total-slides").textContent = totalSlides;

function updateSlideIndicator() {
  document.getElementById("current-slide").textContent = currentIndex + 1;
}

function handleClick(direction) {
  if (direction === "previous") {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  } else {
    currentIndex = (currentIndex + 1) % totalSlides;
  }
  list.scrollBy({
    left: direction === "previous" ? -itemWidth : itemWidth,
    behavior: "smooth",
  });
  updateSlideIndicator();
}

// Automatic sliding function with ping-pong effect
function autoSlide() {
  if (directionForward) {
    currentIndex++;
    if (currentIndex >= totalSlides - 1) {
      directionForward = false; // Reverse direction at the last slide
    }
  } else {
    currentIndex--;
    if (currentIndex <= 0) {
      directionForward = true; // Forward direction at the first slide
    }
  }
  list.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
  updateSlideIndicator();
}

// Start the automatic sliding
function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 3000);
}

// Stop the automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Initialize the slide indicator and start auto sliding
updateSlideIndicator();
startAutoSlide();

// Pause auto sliding on mouse hover and resume on mouse leave
list.addEventListener("mouseenter", stopAutoSlide);
list.addEventListener("mouseleave", startAutoSlide);
