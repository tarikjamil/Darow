// Check if the URL has an ID
if (window.location.href.includes("#")) {
  // Get the ID from the URL
  const id = window.location.href.split("#")[1];

  // Scroll to the element with the ID
  const element = document.getElementById(id);
  if (element) {
    // Scroll smoothly to the element
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    // Look for a child element with class "row--trigger" and click on it
    const childElement = element.querySelector(".row--trigger");
    if (childElement) {
      // Dispatch a click event on the child element
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      childElement.dispatchEvent(clickEvent);
    }
  }
}

document.querySelectorAll(".row--trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const content = trigger.nextElementSibling;
    const isOpen = content.style.height !== "0px";

    // Callback function for animations
    const animate = () => {
      const contentElements = content.querySelectorAll(
        ".row-content, .pebbles-absolute-image, .pebbles-text"
      );
      contentElements.forEach((element) => {
        element.style.transition = "none";
        element.offsetHeight; // Trigger reflow
      });
      content.style.height = isOpen ? 0 : "auto";
      content.style.opacity = isOpen ? 0 : 1;
      contentElements.forEach((element) => {
        element.style.transition = "";
      });
      content.querySelectorAll(".pebbles-absolute-image").forEach((image) => {
        image.style.transform = isOpen ? "scale(0)" : "scale(1)";
      });
      content.querySelectorAll(".pebbles-text").forEach((text) => {
        text.style.opacity = isOpen ? 0 : 1;
      });
    };

    // Close all other row-content divs
    document.querySelectorAll(".row-content").forEach((otherContent) => {
      if (otherContent !== content) {
        otherContent.style.height = 0;
        otherContent.style.opacity = 0;
      }
    });

    // Toggle the clicked row-content div
    animate();
  });
});

// Start by closing all row-content divs
document.querySelectorAll(".row-content").forEach((content) => {
  content.style.height = 0;
  content.style.opacity = 0;
  content.style.overflow = "visible";
});
document.querySelectorAll(".pebbles-absolute-image").forEach((image) => {
  image.style.transform = "scale(0)";
});
document.querySelectorAll(".pebbles-text").forEach((text) => {
  text.style.opacity = 0;
});
