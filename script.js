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

// More Homepage interactivity
document.getElementById("readMoreBtn").onclick = function() {
    document.getElementById("introFull").style.display = "block";
    this.style.display = "none";
};


// Carousel functionality for my testimonials section
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let ind = 0;

const updateCarousel = () => {
    const cardWidth = document.querySelector('.testimonial').offsetWidth + 20; // card width + gap
    track.style.transform = `translateX(-${ind * cardWidth}px)`;
};

// Next button
nextBtn.addEventListener('click', () => {
    if (ind < track.children.length - 1) {
        ind++;
        updateCarousel();
    }
});

// Previous button
prevBtn.addEventListener('click', () => {
    if (ind > 0) {
        ind--;
        updateCarousel();
    }
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


// click on image to view larger version in modal
const modalImgViewer = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const imgCloseBtn = document.querySelector(".img-close");

// Select all homepage images you want to make clickable
const clickableImages = document.querySelectorAll(".peer-imgs, .clickable-img");

clickableImages.forEach(img => {
    img.style.cursor = "pointer"; // Add pointer hover effect
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalImgViewer.style.display = "flex";
    });
});

// Close when clicking the X
imgCloseBtn.addEventListener("click", () => {
    modalImgViewer.style.display = "none";
});

// Close when clicking outside image
modalImgViewer.addEventListener("click", (e) => {
    if (e.target === modalImgViewer) {
        modalImgViewer.style.display = "none";
    }
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



//form validation for enquiry form

document.addEventListener("DOMContentLoaded", () => {
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(event) {
            event.preventDefault(); // stop normal form submission

            // Collect form data
            const formData = {
                fullName: document.getElementById("fullName").value.trim(),
                email: document.getElementById("email").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                enquiryType: document.getElementById("enquiryType").value,
                details: document.getElementById("details").value.trim()
            };

            // Basic validation
            if (formData.fullName.length < 3) {
                showResponse("Full name must be at least 3 characters.", "error");
                return;
            }

            if (!formData.email.includes("@")) {
                showResponse("Please enter a valid email address.", "error");
                return;
            }

            if (!/^\d{10}$/.test(formData.phone)) {
                showResponse("Phone number must be exactly 10 digits.", "error");
                return;
            }

            if (!formData.enquiryType) {
                showResponse("Please select an enquiry type.", "error");
                return;
            }

            if (formData.details.length < 10) {
                showResponse("Details must be at least 10 characters long.", "error");
                return;
            }

            // Simulate AJAX request (no backend required)
            setTimeout(() => {
                let reply = "";

                switch (formData.enquiryType) {
                    case "service":
                        reply = "Our services are available! A team member will contact you shortly.";
                        break;
                    case "product":
                        reply = "Product pricing varies — we will send you a cost estimate.";
                        break;
                    case "volunteer":
                        reply = "Thank you for your interest! Volunteer applications are open.";
                        break;
                    case "sponsor":
                        reply = "We appreciate your willingness to sponsor! A coordinator will reach out.";
                        break;
                }

                showResponse(reply, "success");
            }, 800);
        });

        function showResponse(message, type) {
            const responseEl = document.getElementById("responseMessage");
            responseEl.textContent = message;
            responseEl.style.color = type === "error" ? "red" : "green";
        }
    }
});


// Contact Form Validation and AJAX Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const contactResponse = document.getElementById("contactResponseMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Basic validation check
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const type = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !phone || !type || !message) {
            contactResponse.style.color = "red";
            contactResponse.textContent = "Please fill in all fields correctly.";
            return;
        }

        // If all validations pass, simulate AJAX submission
        contactResponse.style.color = "green";
        contactResponse.textContent = "Thank you! Your message has been sent.";

        // Reset form
        contactForm.reset();
    });
});
