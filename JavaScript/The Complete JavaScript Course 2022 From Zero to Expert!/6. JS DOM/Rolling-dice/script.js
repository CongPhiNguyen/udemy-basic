'use strict';

const diceDOM = document.querySelector('#dice');
const rollDiceButtonDOM = document.querySelector('.btn--roll');
const player1ContainerDOM = document.querySelector('.player.player--0');
const player2ContainerDOM = document.querySelector('.player.player--1');
const holdButtonDOM = document.querySelector('.btn.btn--hold');
const newGameButtonDOM = document.querySelector('.btn.btn--new');

let rollingNumber;
let rollingAnimationTimer;
let isRolling = false;

let currentPlayer = 1;
let player1 = {
  score: 0,
  scoreDOM: document.querySelector('#score--0'),
  currentHolding: 0,
  currentHoldingDOM: document.querySelector('#current--0'),
};

let player2 = {
  score: 0,
  scoreDOM: document.querySelector('#score--1'),
  currentHolding: 0,
  currentHoldingDOM: document.querySelector('#current--1'),
};
// console.log(diceDOM);
const calculateResult = rollingScore => {
  if (rollingNumber === 1) {
    if (currentPlayer === 1) {
      currentPlayer = 2;
      player1ContainerDOM.classList.remove('player--active');
      player2ContainerDOM.classList.add('player--active');
      player1.currentHolding = 0;
      player1.currentHoldingDOM.textContent = player1.currentHolding;
    } else {
      currentPlayer = 1;
      player2ContainerDOM.classList.remove('player--active');
      player1ContainerDOM.classList.add('player--active');
      player2.currentHolding = 0;
      player2.currentHoldingDOM.textContent = player2.currentHolding;
    }
  } else {
    if (currentPlayer === 1) {
      player1.currentHolding += rollingScore;
      player1.currentHoldingDOM.textContent = player1.currentHolding;
    } else {
      player2.currentHolding += rollingScore;
      player2.currentHoldingDOM.textContent = player2.currentHolding;
    }
  }
};

const rollingDice = () => {
  rollingNumber = Math.floor(Math.random() * 6) + 1;
  console.log(rollingNumber);
  // Animation of rolling
  const rollingTime = 1000;
  let rollingSpeed = 100;
  let rollingLoop = 100;

  // let rollingStep = function () {
  //   isRolling = true;
  //   clearInterval(rollingAnimationTimer);
  //   rollingSpeed -= 2;
  //   rollingLoop -= 2;
  //   const radomShuffle = Math.floor(Math.random() * 6) + 1;
  //   diceDOM.src = `dice-${radomShuffle}.png`;
  //   if (rollingSpeed != 0 && rollingLoop != 0) {
  //     rollingAnimationTimer = setInterval(rollingStep, 2000 / rollingSpeed);
  //   } else {
  //     diceDOM.src = `dice-${rollingNumber}.png`;
  //     isRolling = false;
  //     // Calcalate result of the roll
  //     calculateResult(rollingNumber);
  //   }
  // };
  // rollingAnimationTimer = setInterval(rollingStep, 2000 / 100);
  diceDOM.src = `dice-${rollingNumber}.png`;
  calculateResult(rollingNumber);
};

const holdResult = () => {
  if (currentPlayer == 1) {
    currentPlayer = 2;
    player1.score += player1.currentHolding;
    player1.currentHolding = 0;
    player1.scoreDOM.textContent = player1.score;
    player1.currentHoldingDOM.textContent = player1.currentHolding;

    if (player1.score >= 10) {
      player1ContainerDOM.classList.remove('player--active');
      player1ContainerDOM.classList.add('player--winner');
    } else {
      player1ContainerDOM.classList.remove('player--active');
      player2ContainerDOM.classList.add('player--active');
    }
  } else {
    currentPlayer = 1;
    player2.score += player2.currentHolding;
    player2.currentHolding = 0;
    player2.scoreDOM.textContent = player2.score;
    player2.currentHoldingDOM.textContent = player2.currentHolding;

    if (player2.score >= 10) {
      player2ContainerDOM.classList.remove('player--active');
      player2ContainerDOM.classList.add('player--winner');
    } else {
      player2ContainerDOM.classList.remove('player--active');
      player1ContainerDOM.classList.add('player--active');
    }
  }
};

const newGame = () => {
  currentPlayer = 1;
  player1.score = 0;
  player1.currentHolding = 0;
  player1.scoreDOM.textContent = 0;
  player1.currentHoldingDOM.textContent = 0;
  player2.score = 0;
  player2.currentHolding = 0;
  player2.scoreDOM.textContent = 0;
  player2.currentHoldingDOM.textContent = 0;
  player1ContainerDOM.classList.remove('player--winner');
  player2ContainerDOM.classList.remove('player--winner');
  player1ContainerDOM.classList.add('player--active');
};

rollDiceButtonDOM.onclick = () => {
  if (!isRolling) {
    rollingDice();
  }
};

holdButtonDOM.onclick = () => {
  holdResult();
};

newGameButtonDOM.onclick = () => {
  newGame();
};
