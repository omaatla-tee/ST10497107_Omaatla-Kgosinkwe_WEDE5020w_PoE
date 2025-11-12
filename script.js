// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Toggle visibility
    content.style.display = content.style.display === "block" ? "none" : "block";

    // Optional: close others when one opens
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.nextElementSibling.style.display = "none";
      }
    });
  });
});
