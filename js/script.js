"use strict";

console.log("JS is working");

// ---------- ELEMENTS ----------
const welcomeMessage = document.getElementById("welcome-message");
const ratingMessage = document.getElementById("rating-message");
const ratingImages = document.getElementById("rating-images");
const btnTreat = document.getElementById("btnTreat");
const treatCountSpan = document.getElementById("treat-count");

console.log("btnTreat is:", btnTreat);
console.log("treatCountSpan is:", treatCountSpan);

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
  img.src = "images/dog-paws-up.jpg";
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

    updateWelcomeMessage(messages[type]);
}
 
let treatCount = 0;

//----------Action Button Events----------
  document.getElementById("btnAdopt")
  ?.addEventListener("click", () => handleUserAction("adopt"));

document.getElementById("btnVolunteer")
  ?.addEventListener("click", () => handleUserAction("volunteer"));

document.getElementById("btnSurrender")
  ?.addEventListener("click", () => handleUserAction("surrender"));

btnTreat?.addEventListener("click", () => {
  if (treatCount < 10) {
    treatCount++;
    console.log("Treat clicked. Count =", treatCount);
    treatCountSpan.textContent = String(treatCount);

    const treatIcons = document.getElementById("treat-icons");
    if (!treatIcons) return;

    // clear old icons
    treatIcons.innerHTML = "";

    // FOR LOOP — show one cookie per treat

   for (let i = 0; i < treatCount; i++) {
  const treat = document.createElement("span");
  treat.textContent = "🍪";
  treat.style.fontSize = "32px";
  treatIcons.appendChild(treat);
  }
  }
}); 

// ---------- RATING BUTTON ----------
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




