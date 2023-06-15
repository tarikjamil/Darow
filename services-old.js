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

// Trigger click if ID exists in the URL
window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    const urlHash = window.location.hash.slice(1); // Remove the '#' symbol from the hash
    if (urlHash) {
      const targetElement = document.getElementById(urlHash);
      if (targetElement) {
        let clickCount = 0;

        const clickHandler = () => {
          clickCount++;
          console.log(`#${urlHash} clicked ${clickCount} times.`);
        };

        targetElement.addEventListener("click", clickHandler);
        targetElement.click();
        targetElement.removeEventListener("click", clickHandler);
      }
    }
  }, 1000);
});
