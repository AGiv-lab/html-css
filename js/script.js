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
  const displayName = name ? name : "friend";

  switch (type) {
    case "adopt":
      updateWelcomeMessage(
        `Welcome, ${displayName}! Thanks for choosing to adopt 🐾`
      );
      break;

    case "volunteer":
      updateWelcomeMessage(
        `Welcome, ${displayName}! Thanks for volunteering 🐾`
      );
      break;

    case "surrender":
      updateWelcomeMessage(
        `Thank you, ${displayName}. We’ll help your pet find a loving home 🐕`
      );
      break;
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

  // Validate input 
  if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
      ratingMessage.textContent = "Please enter a whole number from 1 to 5 🐕";
      return;
    }
    console.log("Rating button clicked");
    console.log("User rating:", numericRating);

    // Create image per rating
     const numericRating = Number(rating);

    const img = document.createElement("img");
      img.src = "img/Dog-paws-up.avif";
      img.alt = "Dog sitting with paws in the air";

      ratingImages.appendChild(img);

      ratingMessage.textContent = `${numericRating} paw${numericRating > 1 ? "s" : ""}! 🐾`;
  });
}


    // ----------Rating messages----------
    switch (numericRating) {
      case 1:
        ratingMessage.textContent =
          "1 Woof 🐾 — Sad eyes. We’ll do better!";
        break;
      case 2:
        ratingMessage.textContent =
          "2 Woofs 🐾 — Still in puppy training!";
        break;
      case 3:
        ratingMessage.textContent =
          "3 Woofs 🐾 — Tail wagging!";
        break;
      case 4:
        ratingMessage.textContent =
          "4 Woofs 🐾 — Going for a ride!";
        break;
      case 5:
        ratingMessage.textContent =
          "5 Woofs 🐾 — Going to the park!! 🐕";
        break;
    }
    ratingMessage.textContent = messages[numericRating];
    }
  });
}

