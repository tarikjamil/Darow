$(".embrace--wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this).find(".embrace--letter");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "bottom bottom"
    }
  });
  tl.from(targetElement, {
    y: "-50%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
});
