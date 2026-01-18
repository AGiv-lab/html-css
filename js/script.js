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


