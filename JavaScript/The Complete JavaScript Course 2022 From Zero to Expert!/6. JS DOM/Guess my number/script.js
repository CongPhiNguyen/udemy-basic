'use strict';

const guessNumberDOM = document.querySelector('#guess');
const messageDOM = document.querySelector('#message');
const scoreDOM = document.querySelector('#score');
const highScoreDOM = document.querySelector('#highscore');
const bodyDOM = document.querySelector('body');
const resultDOM = document.querySelector('#result');
const buttonAgain = document.querySelector('.btn.again');
const buttonCheck = document.querySelector('.btn.check');

let highScore = 0;
let randomNumber;
let score = 20;

const randomNumberFunc = () => {
  randomNumber = Math.round(Math.random() * 20) + 1;
  console.log(randomNumber);
};

randomNumberFunc();

const gameRestart = () => {
  randomNumberFunc();
  messageDOM.textContent = 'Start guessing.....';
  guessNumberDOM.value = '';
  resultDOM.textContent = '?';
  bodyDOM.style.backgroundColor = '#222';
  score = 20;
  scoreDOM.textContent = score;
};

const gameOver = () => {
  messageDOM.textContent = 'You lost the game';
};

buttonCheck.onclick = () => {
  // console.log(guessNumberDOM.value);
  if (guessNumberDOM.value.length === 0) {
    messageDOM.textContent = '⛔ No number';
    return;
  }

  let guessNumber = parseInt(guessNumberDOM.value);
  if (guessNumber != randomNumber) {
    if (score === 0) {
      gameOver();
      return;
    }
    score--;
    scoreDOM.textContent = score;
    messageDOM.textContent = guessNumber < randomNumber ? 'To low' : 'To high';
  } else {
    bodyDOM.style.backgroundColor = '#60b347';
    messageDOM.textContent = 'Correct Number';
    if (score > highScore) highScore = score;
    highScoreDOM.textContent = highScore;
    resultDOM.textContent = highScore;
    // gameOver();
  }
};

buttonAgain.onclick = () => {
  gameRestart();
};
