"use strict";
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const diceEl = document.querySelector(".dice");
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.querySelector("#score--1");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore = 0,
  playing,
  activePlayer,
  score;

function init() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  playing = true;
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

newGame.addEventListener("click", init);

rollDice.addEventListener("click", function () {
  diceEl.classList.remove("hidden");
  const dice = Math.floor(Math.random() * 6 + 1);
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
holdDice.addEventListener("click", function () {
  score[activePlayer] += currentScore;
  console.log(activePlayer);
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  switchPlayer();
});
