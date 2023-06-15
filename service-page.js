$(".menu--link").on("click", function () {
  $(this).toggleClass("is--menu--open");
  $(".navbar-brand").toggleClass("is--menu--open");
});

$(".menu-link").on("click", function () {
  $(".menu--link").click();
});

$(".close--menu").on("click", function () {
  $(".menu--link").click();
});

var triggers = document.getElementsByClassName("menu--link");
var body = document.body;

for (var i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", function () {
    body.classList.toggle("stop-scrolling");
  });
}

gsap.registerPlugin(ScrollTrigger);

// navbar start
// Start by closing all row-content divs
gsap.set(".navbar--menu", { height: 0, opacity: 0, overflow: "hidden" });
gsap.set(".menu--icon", { opacity: 1 });
gsap.set(".menu--icon-close", { opacity: 0 });

const trigger = document.querySelector(".menu--link");
const navbarMenu = document.querySelector(".navbar--menu");
const menuIcons = document.querySelectorAll(".menu--icon");
const menuIconsClose = document.querySelectorAll(".menu--icon-close");

let isOpen = false;

trigger.addEventListener("click", () => {
  if (isOpen) {
    gsap.to(navbarMenu, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(menuIcons, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(menuIconsClose, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    isOpen = false;
  } else {
    gsap.to(navbarMenu, {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(menuIcons, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(menuIconsClose, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    });
    isOpen = true;
  }
});

// nabvar end

// Start by setting initial state of elements
gsap.set(".pebbles-absolute-image", { scale: 0 });
gsap.set(".pebbles-text", { opacity: 0 });

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.to(".pebbles-absolute-image", {
    scale: 1,
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.1
  });
  tl.to(".pebbles-text", {
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.1,
    delay: -1
  });
}
pageLoad();

$("[animation='fade']").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom -=200rem"
    }
  });
  tl.from(targetElement, {
    opacity: 0,
    ease: "Quint.easeOut",
    duration: 2
  });
});

$(".parallax--wrapper").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
      end: "top top",
      scrub: true
    }
  });
  tl.from($(this), {
    width: "80vw",
    ease: "Quint.easeOut"
  });
});

// Select all .pebbles-absolute-image elements
document.querySelectorAll(".pebbles-absolute-image").forEach((element) => {
  // Create a GSAP timeline for the wiggle animation
  const wiggleTimeline = gsap.timeline({ paused: true });
  wiggleTimeline
    .to(element, { rotation: -2, duration: 0.165, ease: "power1.inOut" })
    .to(element, { rotation: 2, duration: 0.165, ease: "power1.inOut" })
    .to(element, { rotation: -2, duration: 0.165, ease: "power1.inOut" })
    .to(element, { rotation: 0, duration: 0.165, ease: "power1.inOut" });

  // Start the animation on mouseenter
  element.addEventListener("mouseenter", () => {
    wiggleTimeline.restart();
  });

  // Stop the animation on mouseleave
  element.addEventListener("mouseleave", () => {
    wiggleTimeline.pause();
    gsap.to(element, { rotation: 0, duration: 0.3, ease: "power1.inOut" }); // reset to original state
  });
});
