"use strict";
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownElement = document.getElementById("countdown");
setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownElement.innerHTML = `${minutes}: ${seconds}`;
  time--;
  if (time <= 0) {
    countdownElement.innerHTML = "Expired";
  
  }
}
