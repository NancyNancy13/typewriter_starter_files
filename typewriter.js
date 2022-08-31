"use strict";
window.addEventListener("DOMContentLoaded", initloop);
let counter = -1;
const string = document.querySelector("#typewriter").innerHTML;
const lengthOfString = string.length;
console.log(lengthOfString);
document.querySelector("#typewriter").innerHTML = " ";
console.log(string);
// initloop();

function initloop() {
  console.log(initloop);
  loop();
}

function loop() {
  console.log(loop);
  if (counter < lengthOfString) {
    counter++;
    console.log(counter);
    document.querySelector("#typewriter").innerHTML += string[counter];
    setTimeout(loop, 1000);
  } else {
    location.reload;
  }
}
