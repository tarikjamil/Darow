// smooth scroll
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$(".menu--link").on("click", function () {
  $(this).toggleClass("is--menu--open");
  $(".navbar-brand").toggleClass("is--menu--open");
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
gsap.set(".navbar--menu", { height: 0, overflow: "hidden" });
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
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(menuIcons, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(menuIconsClose, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    isOpen = false;
  } else {
    gsap.to(navbarMenu, {
      height: "auto",
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(menuIcons, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(menuIconsClose, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
    isOpen = true;
  }
});

// nabvar end

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
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
      start: "top bottom -=200rem",
    },
  });
  tl.from(targetElement, {
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    duration: 2,
  });
});

$(".parallax--wrapper").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
      end: "top top",
      scrub: true,
    },
  });
  tl.from($(this), {
    width: "80vw",
    ease: "Quint.easeOut",
  });
});

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 100) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});
