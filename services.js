// Start by closing all row-content divs
gsap.set(".row-content", { height: 0, opacity: 0, overflow: "visible" });
gsap.set(".pebbles-absolute-image", { scale: 0 });
gsap.set(".pebbles-text", { opacity: 0 });

document.querySelectorAll(".row--trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const content = trigger.nextElementSibling;
    const isOpen = content.style.height !== "0px";

    gsap.to(".row-content", {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(".pebbles-absolute-image", {
      scale: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    gsap.to(".pebbles-text", {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });

    if (!isOpen) {
      gsap.to(content, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: function () {
          const yOffset = -200;
          const yPosition =
            trigger.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
      });
      gsap.to(content.querySelectorAll(".pebbles-absolute-image"), {
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.1
      });
      gsap.to(content.querySelectorAll(".pebbles-text"), {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.1
      });
    }
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    const urlHash = window.location.hash.slice(1); // Remove the '#' symbol from the hash
    if (urlHash) {
      const targetElement = document.getElementById(urlHash);
      if (targetElement) {
        const content = targetElement.nextElementSibling;

        gsap.to(".row-content", {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });
        gsap.to(".pebbles-absolute-image", {
          scale: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });
        gsap.to(".pebbles-text", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });

        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: function () {
            const yOffset = -200;
            const yPosition =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
            lenis.destroy(); // Assuming lenis is your Lenis instance
            lenis = new Lenis();
          }
        });
        gsap.to(content.querySelectorAll(".pebbles-absolute-image"), {
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.1
        });
        gsap.to(content.querySelectorAll(".pebbles-text"), {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.1
        });
      }
    }
  }, 1000);
});

window.addEventListener("pageshow", (event) => {
  // Reset the animations and styles
  gsap.set(".row-content", { height: 0, opacity: 0, overflow: "visible" });
  gsap.set(".pebbles-absolute-image", { scale: 0 });
  gsap.set(".pebbles-text", { opacity: 0 });

  // Act on the URL hash
  setTimeout(() => {
    const urlHash = window.location.hash.slice(1);
    if (urlHash) {
      const targetElement = document.getElementById(urlHash);
      if (targetElement) {
        const content = targetElement.nextElementSibling;

        gsap.to(".row-content", {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });
        gsap.to(".pebbles-absolute-image", {
          scale: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });
        gsap.to(".pebbles-text", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });

        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: function () {
            const yOffset = -200;
            const yPosition =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
          }
        });
        gsap.to(content.querySelectorAll(".pebbles-absolute-image"), {
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.1
        });
        gsap.to(content.querySelectorAll(".pebbles-text"), {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.1
        });
      }
    }
  }, 1000);
});

$(document).ready(function () {
  $(".pebbles-absolute-image div").on("click", function (event) {
    event.preventDefault();
    var href = $(this).attr("linkos");
    $(href).trigger("click");
  });
});
