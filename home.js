$(".pebbles-wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this).find(".pebbles");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top center"
    }
  });
  tl.from(targetElement, {
    y: "50%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 2
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "slider",
    perPage: 4,
    perMove: 1,
    gap: "16rem",
    arrows: true,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        type: "slider",
        perPage: 1,
        drag: true
      }
    }
  });

  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider2", {
    type: "slider",
    perPage: 4,
    perMove: 1,
    gap: "16rem",
    arrows: true,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        drag: true,
        gap: "16rem"
      }
    }
  });

  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider3", {
    type: "slider",
    perPage: 4,
    perMove: 1,
    gap: "16rem",
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        drag: true
      }
    }
  });

  splide.mount();
});
