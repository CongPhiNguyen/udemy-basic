const GRID_WIDTH = 600;
const GRID_HEIGHT = 400;

class Grid {
  _gridDOM;
  _width;
  _height;
  constructor(gridDOM, width, height) {
    this._width = width;
    this._height = height;
    this._gridDOM = gridDOM;
    this._gridDOM.style.width = width + 2 + "px";
    this._gridDOM.style.height = height + "px";
  }
  addBlock(blockDOM) {
    this._gridDOM.appendChild(blockDOM);
  }
}

let grid = new Grid(document.querySelector("#grid"), GRID_WIDTH, GRID_HEIGHT);
const blockWidth = 100;
const blockHeight = 20;
const blockColumn = GRID_WIDTH / blockWidth;
const blockRow = GRID_HEIGHT / 4 / blockHeight;
const userWidth = GRID_WIDTH / 3;
const userHeight = 20;

const velocity = 6;

class AbstractBlock {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Block extends AbstractBlock {}

class User extends AbstractBlock {
  width;
  height;
  constructor(x, y, width, height) {
    super();
    this.x = x;
    this.y = y;
    this.width = width || GRID_WIDTH / 3;
    this.height = height || 20;
  }
}

const overlayDOM = document.querySelector("#overlay");
displayMessage = (message) => {
  overlayDOM.classList.remove("hidden");
  overlayDOM.childNodes[1].textContent = message;
};

let blocks = [];

const createBlocks = (row, column) => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      blocks.push(new Block(j * blockWidth, i * blockHeight));
    }
  }
};

createBlocks(blockRow, blockColumn);

const drawBlocks = () => {
  blocks.forEach((blockItem) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = `${blockItem.x}px`;
    block.style.top = `${blockItem.y}px`;
    blockItem.object = block;
    grid.addBlock(block);
  });
};
drawBlocks();

const user = new User(
  (GRID_WIDTH - userWidth) / 2,
  GRID_HEIGHT - userHeight - 30
);
const drawUser = () => {
  const block = document.createElement("div");
  block.classList.add("user");
  block.style.left = `${user.x}px`;
  block.style.top = `${user.y}px`;
  block.style.width = `${user.width}px`;
  block.style.height = `${user.height}px`;
  grid.addBlock(block);
  user.object = block;
};
drawUser();

const updateUser = () => {
  user.object.style.left = `${user.x}px`;
  user.object.style.top = `${user.y}px`;
};

let moveUserTimer = null;

const moveUser = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      clearInterval(moveUserTimer);
      moveUserTimer = setInterval(() => {
        if (user.x >= velocity) {
          user.x -= velocity;
          updateUser();
        }
      }, 4);
      break;
    case "ArrowRight":
      clearInterval(moveUserTimer);
      moveUserTimer = setInterval(() => {
        if (user.x <= GRID_WIDTH - velocity - GRID_WIDTH / 4) {
          user.x += velocity;
          updateUser();
        }
      }, 4);
      break;
    case "ArrowUp": {
      clearInterval(moveUserTimer);
      moveUserTimer = setInterval(() => {
        if (user.y >= 0) {
          user.y -= velocity;
          updateUser();
        }
      }, 4);
      break;
    }
    case "ArrowDown": {
      clearInterval(moveUserTimer);
      moveUserTimer = setInterval(() => {
        if (user.y <= GRID_HEIGHT - blockHeight - 10) {
          user.y += velocity;
          updateUser();
        }
      }, 4);
      break;
    }
    default:
      break;
  }
};
const removeTimer = () => {
  clearInterval(moveUserTimer);
};

document.addEventListener("keydown", moveUser);
document.addEventListener("keyup", removeTimer);
class Ball {
  constructor(x = GRID_WIDTH / 2 - 10, y = GRID_HEIGHT - 70) {
    this.x = x;
    this.y = y;
  }
  velocity = 10;
  xDirection = -1;
  yDirection = -1;
  step = 2;
  width = 20;
  height = 20;
}

// render ball
const ball = new Ball();
let gameTimerList = [];

const drawBall = () => {
  ball.object = document.createElement("div");
  ball.object.classList.add("ball");
  ball.object.style.left = ball.x + "px";
  ball.object.style.top = ball.y + "px";
  grid.addBlock(ball.object);
};
drawBall();

// check for collision
const checkCollision = () => {
  // check block collision
  blocks.forEach((block) => {
    // Top bottom edge
    if (
      block.x - ball.width / 2 < ball.x &&
      block.x + blockWidth - ball.width / 2 > ball.x
    ) {
      if (block.y + blockHeight >= ball.y && ball.y >= block.y) {
        ball.yDirection = +1;
        block.object.style.display = "none";
        blocks = blocks.filter(function (item) {
          return item !== block;
        });
        if (blocks.length == 0) {
          displayMessage("Congratulation\nYou won!");
          gameTimerList.forEach((timer) => clearInterval(timer));
        }
      }
    }
  });

  //Check user collision
  if (
    user.x - ball.width / 2 < ball.x &&
    user.x + user.width + ball.width / 2 > ball.x &&
    user.y - ball.height <= ball.y &&
    user.y + user.height - ball.height >= ball.y
  ) {
    ball.yDirection = -1;
  }

  // check for wall collision
  if (ball.y <= 0) ball.yDirection = 1;
  else if (ball.x >= GRID_WIDTH - 20) ball.xDirection = -1;
  else if (ball.x <= 0) ball.xDirection = 1;
  else if (ball.y > GRID_HEIGHT - 30) {
    displayMessage("Game over!\nYou lost");
    gameTimerList.forEach((timer) => clearInterval(timer));
  }

  return false;
};

const updateBall = () => {
  // console.log(checkCollision());
  checkCollision();
  ball.x += ball.step * ball.xDirection;
  ball.y += ball.step * ball.yDirection;
  ball.object.style.left = ball.x + "px";
  ball.object.style.top = ball.y + "px";
  console.log(1);
};

// gameTimer = setInterval(updateBall, ball.velocity);
let mode = "Easy 🐣🐣🐣";
const modeDOM = document.querySelector("#mode");

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    let gameTimer = setInterval(updateBall, ball.velocity);
    gameTimerList.push(gameTimer);
    if (gameTimerList.length === 2) modeDOM.textContent = "Medium 🐥🐥🐥";
    else if (gameTimerList.length > 2) modeDOM.textContent = "Hard 🦅🦅🦅";
  }
});

// Play again
playAgain = () => {
  window.location.reload();
};

const playAgainButtonDOM = document.querySelector(".button-play-again");
playAgainButtonDOM.onclick = playAgain;
