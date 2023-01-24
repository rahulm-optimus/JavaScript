'use strict';

//starter selectors
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//starter conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;

//to save the score outside the function after each click
let scores = [0, 0];
let currentScore = 0;
let activeScore = 0;

//creating a repitive function with no argument

const switchPlayer = function () {
  document.getElementById(`current--${activeScore}`).textContent = 0;
  activeScore = activeScore === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //we need to generat random number for dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice-number:${dice}`);
    diceEl.src = `dice-${dice}.png`;
    //we need to display that dice
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      //add dice to currentscore
      currentScore = currentScore + dice;
      document.getElementById(`current--${activeScore}`).textContent =
        currentScore;
    } else {
      //when switching we need to reset current score and active player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //we need to hold the score
    scores[activeScore] += currentScore;

    document.getElementById(`score--${activeScore}`).textContent =
      scores[activeScore];

    //to check for the winning condition (>100?)

    if (scores[activeScore] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeScore}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activeScore}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // switch for the player
      switchPlayer();
    }
  }
});
//resetting the values

btnNew.addEventListener('click', function () {
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');
  playing = true;
});
