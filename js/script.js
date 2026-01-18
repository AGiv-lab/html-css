"use strict";

console.log("JS is working");

// ---------- ELEMENTS ----------
const welcomeMessage = document.getElementById("welcome-message");

// ---------- FUNCTIONS ----------
function updateWelcomeMessage(message) {
  if (welcomeMessage) {
    welcomeMessage.textContent = message;
  }
}

function handleUserAction(type) {
  const name = prompt("What is your name?");
  const userName = name ? name : "Friend";

  if (type === "adopt") {
    updateWelcomeMessage(
      `Welcome, ${userName}! Thanks for choosing to adopt 🐾`
    );

  } else if (type === "volunteer") {
    updateWelcomeMessage(
      `Welcome, ${userName}! Thanks for volunteering — paw shake on it! 🐾`
    );

  } else if (type === "surrender") {
    updateWelcomeMessage(
      `Thanks for trusting us, ${userName}. We'll help your pet find a loving home 🐕`
    );
  }
}

// ---------- BUTTON EVENTS ----------
const btnAdopt = document.getElementById("btnAdopt");
if (btnAdopt) {
  btnAdopt.addEventListener("click", () => handleUserAction("adopt"));
}

const btnVolunteer = document.getElementById("btnVolunteer");
if (btnVolunteer) {
  btnVolunteer.addEventListener("click", () => handleUserAction("volunteer"));
}

const btnSurrender = document.getElementById("btnSurrender");
if (btnSurrender) {
  btnSurrender.addEventListener("click", () => handleUserAction("surrender"));
}

// ---------- RATING SYSTEM ----------
const btnRate = document.getElementById("btnRate");

if (btnRate) {
  btnRate.addEventListener("click", () => {
    console.log = prompt("Rating button clicked");

    const rating = prompt("Rate our website from 1 to 5 🐾");
    const ratingMessage = document.getElementById("rating-message");
    const ratingImages = document.getElementById("rating-images");

    // Clear previous output
    ratingImages.innerHTML = "";
    ratingMessage.textContent = "";

    // User canceled
    if (rating === null) {
      ratingMessage.textContent = "No rating given — still friends 🐶";
      return;
    }

    const numericRating = Number(rating);
    console.log("User rating:", numericRating);

    // Validate input
    if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
      ratingMessage.textContent = "Please enter a whole number from 1 to 5 🐕";
      return;
    }

    // Create ONE image
    const img = document.createElement("img");
    img.src = "images/dog-paws-up.jpg"; // <-- your image
    img.alt = "Dog sitting with paws in the air";
    ratingImages.appendChild(img);

    // ----------Rating messages----------
    switch (numericRating) {
      case 1:
        ratingMessage.textContent =
          "1 paw 🐾 — Oof. We’ll do better!";
        break;
      case 2:
        ratingMessage.textContent =
          "2 paws 🐾 — Still learning!";
        break;
      case 3:
        ratingMessage.textContent =
          "3 paws 🐾 — Not bad at all!";
        break;
      case 4:
        ratingMessage.textContent =
          "4 paws 🐾 — Tail wagging!";
        break;
      case 5:
        ratingMessage.textContent =
          "5 paws 🐾 — Best day ever!! 🐕";
        break;
    }
  });
}

