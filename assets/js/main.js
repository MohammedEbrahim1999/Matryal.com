// Select all images in the banner
const bannerImages = document.querySelectorAll('img');

// Add a contextmenu event listener to each image
bannerImages.forEach(image => {
    image.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Prevent the default context menu
        alert("Right-click is disabled on this image."); // Optional: Show a message
    });
});


// JavaScript for Dropdown Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.querySelector(".login-lan a h3");
    const languageMenu = document.querySelector(".language-menu");
    const languageOptions = document.querySelectorAll(".language-menu a");

    // Toggle the menu on click
    languageToggle.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        languageMenu.style.display =
            languageMenu.style.display === "block" ? "none" : "block";
    });

    // Close the menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".login-lan")) {
            languageMenu.style.display = "none";
        }
    });

    // Close the menu and update text when a language is selected
    languageOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const selectedLanguage = option.textContent; // Get the selected language
            languageToggle.innerHTML = `${selectedLanguage} <i class="fa-solid fa-chevron-down"></i>`; // Update the toggle text
            languageMenu.style.display = "none"; // Close the menu
        });
    });
});








const slider = document.getElementById('slider');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const scrollAmount = 200; // Adjust scroll amount

// Function to update arrow visibility based on scroll position
function updateArrowVisibility() {
    if (slider.scrollLeft <= 0) {
        leftArrow.style.display = 'none !important'; // Hide left arrow
    } else {
        leftArrow.style.display = 'flex !important'; // Show left arrow
    }

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        rightArrow.style.display = 'none !important'; // Hide right arrow
    } else {
        rightArrow.style.display = 'flex !important'; // Show right arrow
    }
}

// Add event listeners for arrow clicks
leftArrow.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
    setTimeout(updateArrowVisibility, 300); // Delay to allow smooth scrolling
});

rightArrow.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
    });
    setTimeout(updateArrowVisibility, 300); // Delay to allow smooth scrolling
});

// Add event listener for slider scroll
slider.addEventListener('scroll', updateArrowVisibility);

// Initial check for arrow visibility
updateArrowVisibility();
















    