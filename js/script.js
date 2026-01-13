console.log("JS is working");

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
    