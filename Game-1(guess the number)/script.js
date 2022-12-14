'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'hey its time to guess'; //textContent property to select the text content of the element
// document.querySelector('.guess').value = 45; //value property to insert content in input
// document.querySelector('body').style.color = 'red';

//lets begin with the game
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;
let highScore = 0;

//lets create functions to dry up the code
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess < 21 && guess > 0) {
    // when player does not enter a number
    if (!guess) {
      // document.querySelector('.message').textContent = 'โ no number';
      displayMessage('โ no number');
      // when player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = 'You win๐ฅ';
      displayMessage('You win๐ฅ');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '17rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 0) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? 'try smaller ! ' : 'try higher!'; //using ternary function to dry up the code
        displayMessage(guess > secretNumber ? 'try smaller ! ' : 'try higher!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'You lost ๐';
        displayMessage('You lost ๐');
      }
    }
    // //when player guess number is larger than the actual number
    // else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'try smaller !';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost ๐';
    //   }
    // }
    // //when player number is less than actual number
    // else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'try higher!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost ๐';
    //   }
    // }
  } else {
    if (!guess) {
      // document.querySelector('.message').textContent = 'โ no number';
      displayMessage('โ no number');
      // when player wins
    } else {
      // document.querySelector('.message').textContent = 'not between 1 to 20 ';
      displayMessage('not between 1 to 20 ');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '5';
  document.querySelector('.guess').value = '';
});
