let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

// HOME SCORE:
function home1() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function home2() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function home3() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

// GUEST SCORE:
function guest1() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function guest2() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function guest3() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}

// REMATCH BUTTON:
function rematch() {
  guestEl.textContent = 0;
  homeEl.textContent = 0;
}
