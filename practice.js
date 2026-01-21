/* =====================================
   PRACTICE 1: Greeting Message
   ===================================== */
 
// CURRENT CODE (works already):
function sayHi(); {
}

const name = prompt("What is your name?");
const greeting = document.getElementById("message");
 
if (name && name.trim() !== "") {
  greeting.textContent = `Hello, ${name}!`;
} else {
  greeting.textContent = "Hello, friend!";
}

TODO:
- Wrap this code in a function called greetUser
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 2: Time of Day Message
   ===================================== */
 
// CURRENT CODE:
function timeGreet(){

}
const hourInput = prompt("What hour is it? (0–23)");
const hour = Number(hourInput);
const timeMessage = document.getElementById("time");
 
if (hour < 12) {
  timeMessage.textContent = "Good morning ☀️";
} else if (hour < 18) {
  timeMessage.textContent = "Good afternoon 🌤️";
} else {
  timeMessage.textContent = "Good evening 🌙";
}
 timeGreet();
/*
TODO:
- Turn this into a function called showTimeGreeting
- Call the function
*/

/* =====================================
   PRACTICE 3: Change Box Color
   ===================================== */
 
// CURRENT CODE:
function pickColor(){
    
const color = prompt("Pick a border color");
const box = document.getElementById("box");
 
if (color && color.trim() !== "") {
  box.style.border = "5px solid " + color;
}
}
pickColor();

/*
TODO:
- Turn this into a function called changeBoxColor
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 4: Confirm Choice
   ===================================== */
 
// CURRENT CODE:
const wantsDarkMode = confirm("Turn on dark mode?");
const page = document.body;
 
if (wantsDarkMode) {
  page.style.backgroundColor = "#222";
  page.style.color = "white";
}
 
/*
TODO:
- Turn this into a function called toggleDarkMode
- Call the function
*/
 
 sayHi();

 
/* =====================================
   PRACTICE 5: Console Message
   ===================================== */
 
// CURRENT CODE:
console.log("JavaScript is running!");
 
/*
TODO:
- Turn this into a function called logMessage
- Call the function
*/