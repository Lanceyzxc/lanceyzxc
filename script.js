const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar ul');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

// Typing effect for roles
document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Front-End Developer", "Information System", "Problem Solver"];
  let index = 0;
  const roleElement = document.querySelector(".dynamic-role");
  let typeSpeed = 100; // Default type speed
  let eraseSpeed = 50; // Default erase speed
  const delayBetweenRoles = 2000; // Time between roles

  // Adjust typing speed based on screen width
  function adjustTypingSpeed() {
    if (window.innerWidth <= 768) { // For mobile screens
      typeSpeed = 80;
      eraseSpeed = 40;
    } else if (window.innerWidth <= 1024) { // For tablets and smaller desktops
      typeSpeed = 120;
      eraseSpeed = 60;
    } else { // For larger screens
      typeSpeed = 90;
      eraseSpeed = 75;
    }
  }

  // Adjust font size based on screen width
  function adjustFontSize() {
    if (window.innerWidth <= 768) {
      roleElement.style.fontSize = "1.2rem"; // Smaller text on mobile
    } else if (window.innerWidth <= 1024) {
      roleElement.style.fontSize = "1.5rem"; // Medium text on tablets
    } else {
      roleElement.style.fontSize = "2rem"; // Larger text on desktop
    }
  }

  // Type the role
  function typeRole() {
    const currentRole = roles[index];
    let charIndex = 0;

    function typeChar() {
      if (charIndex < currentRole.length) {
        roleElement.textContent += currentRole[charIndex];
        charIndex++;
        setTimeout(typeChar, typeSpeed);
      } else {
        setTimeout(eraseRole, delayBetweenRoles);
      }

    }

    typeChar();
  }

  // Erase the role
  function eraseRole() {
    const currentRole = roles[index];
    let charIndex = currentRole.length;

    function eraseChar() {
      if (charIndex > 0) {
        roleElement.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseChar, eraseSpeed);
      } else {
        index = (index + 1) % roles.length;
        setTimeout(typeRole, typeSpeed);
      }
    }

    eraseChar();
  }

  // Initialize typing effect and adjust based on screen size
  function initTypingEffect() {
    adjustTypingSpeed();
    adjustFontSize();
    typeRole();
  }

  // Re-initialize the typing effect when the window is resized
  window.addEventListener('resize', () => {
    adjustTypingSpeed();
    adjustFontSize();
  });

  // Start the typing effect
  initTypingEffect();
});

// Select the color toggle icon and the theme root
const toggleIcon = document.querySelector('#theme-icon');
const root = document.documentElement;

// Add event listener to toggle the color theme and icon when clicked
toggleIcon.addEventListener('click', () => {
  // Toggle the "orange-theme" class on the root element
  root.classList.toggle('orange-theme');

  // Change the icon based on the current theme
  if (root.classList.contains('orange-theme')) {
    // If orange theme is active, change to the orange icon
    toggleIcon.src = 'icon/Orange.png'; // Change to your orange icon image
  } else {
    // If magenta theme is active, change back to the magenta icon
    toggleIcon.src = 'icon/Magenta.png'; // Change to your magenta icon image
  }
});