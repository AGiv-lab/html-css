'use strict'

console.log("JS is working");

const welcomeMessage = document.getElementById("welcome-message");

function updateWelcomeMessage(message) {
  welcomeMessage.textContent = message;
 
  function handleUserAction(type) {
  if (type === "adopt") {
    const name = prompt("What is your name?");
    updateWelcomeMessage(
      name
        ? `Welcome, ${name}! Thanks for choosing to adopt 🐾`
        : "Welcome, future adopter! 🐶"
    );

   } else if (type === "volunteer") {
    updateWelcomeMessage(
      "Nice to meet you future volunteer — paw shake on it! 🐾"
    );

  } else if (type === "surrender") {
    updateWelcomeMessage(
      "Thanks for trusting us. Let's help your pet find a loving home 🐕"
    );
  }
}  

document.getElementById("btnAdopt")
  .addEventListener("click", () => handleUserAction("adopt"));

document.getElementById("btnVolunteer")
  .addEventListener("click", () => handleUserAction("volunteer"));

document.getElementById("btnSurrender")
  .addEventListener("click", () => handleUserAction("surrender"));

  const name = prompt("I am looking to adopt?");
  const subtitle = document.getElementById("subtitle");
 
  subtitle.textContent = name
    ? `Welcome, ${Adopter}! 🎄`
    : "Welcome, friend! 🎄";
};
img.src = "images/paw-rating.png";

document.getElementById("btnRate").addEventListener("click", function () {

  const rating = prompt("Rate our website from 1 to 5 paws 🐾");
  const ratingMessage = document.getElementById("rating-message");
  const ratingImages = document.getElementById("rating-images");

  ratingImages.innerHTML = "";

  if (rating === null) {
    ratingMessage.textContent = "🐾🐾🐾🐾🐾";
    return;
  }

   if (rating < 1 || rating > 5) {
    ratingMessage.textContent = "Please enter a number between 1 and 5 🐶";
    return;
  }

  /* FOR LOOP — one image repeated per rating */
  for (let i = 0; i < rating; i++) {
    const img = document.createElement("img");
    img.src = "images/paw-rating.png";
    img.alt = "Happy dog paw rating";
    ratingImages.appendChild(img);
  }

  /* Rating responses */
  if (rating == 1) {
    ratingMessage.textContent =
      "1 side-eye 👀 — we hear you and we’re working on it!
  } else if (rating == 2) {
    ratingMessage.textContent =
      "2 wags — Puppy training in progress!";
";

       } else if (rating == 3) {
    ratingMessage.textContent =
      "🐶 Woof woof woof! — thanks, friend!";

  } else if (rating == 4) {
    ratingMessage.textContent =
      "4 tail wags! 🚗 That’s a car ride!";

      
  } else if (rating == 5) {
    ratingMessage.textContent =
      "5 WOOFS!! 🐕 Straight to the park!";
  }

});
/* Welcome prompts with 3 choices

const welcomeMessage = document.querySelector("#welcome-message");

const userReason = prompt(
  "Woof! 🐾 (wags tail)\nTell us why you're here:\n\n" +
  "1. I am looking to adopt\n" +
  "2. I am looking to volunteer\n" +
  "3. I am looking to surrender a pet"
);

if (userReason === "1") {
  welcomeMessage.textContent =
    "Nice to meet you future adopter — paw shake on it! 🐾";

 } else if (userReason === "2") {
  welcomeMessage.textContent =
    "Nice to meet you future volunteer — paw shake on it! 🐾";

} else if (userReason === "3") {
  welcomeMessage.textContent =
    "Thanks for trusting us. Let's help your pet find a loving home 🐶";

} else {
  welcomeMessage.textContent =
    "Woof! 🐾 Take a look around and let us know how we can help.";
   }   
  
   */


