"use strict";

console.log("JS is working");

// ---------- ELEMENTS ----------
const welcomeMessage = document.getElementById("welcome-message");
const ratingMessage = document.getElementById("rating-message");
const ratingImages = document.getElementById("rating-images");

// ---------- FUNCTIONS ----------
function updateWelcomeMessage(message) {
  if (welcomeMessage) {
    welcomeMessage.textContent = message;
  }
}

function isValidRating(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function createRatingImage(container) {
  const img = document.createElement("img");
  img.src = "/img/dog-paws-up.jpg";
  img.alt = "Dog sitting with paws in the air";
  container.appendChild(img);
}

function handleUserAction(type) {
  const name = prompt("What is your name?");
  const displayName = name ? name : "friend";

  const messages = {
    adopt: `Welcome, ${displayName}! Thanks for choosing to adopt 🐾`,
    volunteer: `Welcome, ${displayName}! Thanks for volunteering 🐾`,
    surrender: `Thank you, ${displayName}. Let's help your pet find a loving home 🐕`
  };

  document.getElementById("btnAdopt")
  ?.addEventListener("click", () => handleUserAction("adopt"));

document.getElementById("btnVolunteer")
  ?.addEventListener("click", () => handleUserAction("volunteer"));

document.getElementById("btnSurrender")
  ?.addEventListener("click", () => handleUserAction("surrender"));

  updateWelcomeMessage(messages[type]);
}

// ---------- BUTTON EVENTS ----------
document.getElementById("btnRate")
  ?.addEventListener("click", () => {
    const rating = prompt("Rate our website from 1 to 5 🐾");

    ratingImages.innerHTML = "";
    ratingMessage.textContent = "";

    if (rating === null) {
      ratingMessage.textContent = "No rating given — still friends 🐶";
      return;
    }

    const numericRating = Number(rating);

    if (!isValidRating(numericRating)) {
      ratingMessage.textContent = "Please enter a whole number from 1 to 5 🐕";
      return;
    }

    console.log("Rating button clicked");
    console.log("User rating:", numericRating);

    // -----Repeat image based on rating--------
    for (let i = 0; i < numericRating; i++) {
      createRatingImage(ratingImages);
    }

    const ratingMessages = {
      1: "1 Woof 🐾 — Sad eyes. We can do better!",
      2: "2 Woofs 🐾 — Still in puppy training!",
      3: "3 Woofs 🐾 — Tail wagging!",
      4: "4 Woofs 🐾 — Going for a ride!",
      5: "5 Woofs 🐾 — Going to the park!! 🐕"
    };

    ratingMessage.textContent = ratingMessages[numericRating];
  });



