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

//js for my tabs on our services page
// Select all tab buttons and content
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Loop through buttons
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');

    // Remove 'active' from all buttons and content
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Add 'active' to clicked button and corresponding content
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});


// Get modal and close button
const modal = document.getElementById("warningModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal only if not shown in this session
window.onload = function() {
  if (!sessionStorage.getItem("modalShown")) {
    modal.style.display = "flex";  // show modal
    sessionStorage.setItem("modalShown", "true"); // mark as shown
  }
};

// Close modal when X is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Initialize the map for loctaion services
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map in the "map" div
    // setView([latitude, longitude], zoomLevel)
    const map = L.map('map').setView([-25.7479, 28.2293], 13); // Example: Pretoria coordinates

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, // Maximum zoom level
        attribution: '© OpenStreetMap' // Credit for map data
    }).addTo(map);

    // Place a marker on the map to show Bloom Mind's office
    const marker = L.marker([-25.7479, 28.2293]).addTo(map);

    // Add a popup to the marker explaining what it is
    marker.bindPopup("<b>Bloom Mind Office</b><br>University Campus, Pretoria.").openPopup();
});






