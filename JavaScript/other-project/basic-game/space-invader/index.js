const gridDisplay = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let invaderTimeID = null;
const overlayDOM = document.querySelector("#overlay");
displayMessage = (message) => {
  overlayDOM.classList.remove("hidden");
  overlayDOM.childNodes[1].textContent = message;
};

playAgain = () => {
  window.location.reload();
};

const playAgainButtonDOM = document.querySelector(".button-play-again");
playAgainButtonDOM.onclick = playAgain;

for (var i = 0; i < 15 * 15; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gridDisplay.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");
// render invader
var setting = {
  startX: 0,
  startY: 0,
  width: 10,
  height: 3,
  direction: 1,
  destroyed: [],
};

const renderInvader = () => {
  var invaders = document.querySelectorAll(".invader");
  invaders.forEach((invader) => {
    invader.classList.remove("invader");
  });
  let invaderArray = [];
  for (var i = setting.startY; i < setting.startY + setting.height; i++) {
    for (var j = setting.startX; j < setting.startX + setting.width; j++) {
      if (
        !setting.destroyed.includes(
          (i - setting.startY) * 15 + (j - setting.startX)
        )
      )
        invaderArray.push(i * 15 + j);
      else {
        // console.log("hide", setting.startY*15+setting.startX)
      }
    }
  }
  // console.log("setting.destroyed",setting.destroyed);
  for (var i = 0; i < invaderArray.length; i++) {
    cells[invaderArray[i]].classList.add("invader");
  }
  // Check shooter collision
  var invaders = document.querySelectorAll(".invader");
  invaders.forEach((invader) => {
    if (invader.classList.contains("shooter")) {
      resultDisplay.textContent = "Game over. Shooter was destroyed";
      displayMessage("Game over. Shooter was destroyed");
      clearInterval(invaderTimeID);
    }
  });
};

renderInvader();

const moveInvader = () => {
  if (setting.direction == 1) {
    if (setting.startX == 15 - setting.width) {
      setting.direction = -1;
      setting.startY++;
    } else setting.startX++;
  } else if (setting.direction == -1) {
    if (setting.startX == 0) {
      setting.direction = 1;
      setting.startY++;
    } else setting.startX--;
  }
  // Check reach the bottom
  if (setting.startY == 15 - setting.height) {
    displayMessage("Game over. Invaders reached your base");

    clearInterval(invaderTimeID);
  }

  renderInvader();
};

let gameIsStart = false;
window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (!gameIsStart) {
      invaderTimeID = setInterval(moveInvader, 500);
      gameIsStart = true;
    }
  }
  console.log("q");
});

var shooterY = 12;
var shooterX = 7;

cells[15 * shooterY + shooterX].classList.add("shooter");

const moveShooter = (e) => {
  cells[15 * shooterY + shooterX].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft": {
      if (shooterX > 0) {
        shooterX--;
      }
      break;
    }
    case "ArrowRight": {
      if (shooterX < 14) {
        shooterX++;
      }
      break;
    }
    default:
      break;
  }
  cells[15 * shooterY + shooterX].classList.add("shooter");
};

document.addEventListener("keydown", (e) => moveShooter(e));

let laserIDs = [];
const shoot = (e) => {
  if (laserIDs.length > 3) return;
  let laserX = shooterX;
  let laserY = shooterY;
  const moveLaser = (laser) => {
    cells[laserY * 15 + laserX].classList.remove("laser");
    if (laserY == 0) {
      clearInterval(laser);
      var index = laserIDs.indexOf(laser);
      if (index !== -1) {
        laserIDs.splice(index, 1);
      }
      return;
    }
    laserY--;
    // Check collision
    if (cells[laserY * 15 + laserX].classList.contains("invader")) {
      cells[laserY * 15 + laserX].classList.add("boom");
      cells[laserY * 15 + laserX].classList.remove("invader");
      setTimeout((e) => {
        cells[laserY * 15 + laserX].classList.remove("boom");
        cells[laserY * 15 + laserX].classList.remove("invader");
      }, 100);
      // console.log("pos",laserX-setting.startX + (laserY - setting.startY)*15 );
      // clearInterval(invaderTimeID)
      setting.destroyed.push(
        laserX - setting.startX + (laserY - setting.startY) * 15
      );
      if (setting.destroyed.length == setting.width * setting.height) {
        // resultDisplay.textContent = "You win!!!";
        displayMessage("You win!!");

        clearInterval(invaderTimeID);
      }
      clearInterval(laser);
      var index = laserIDs.indexOf(laser);
      if (index !== -1) {
        laserIDs.splice(index, 1);
      }
      return;
    }
    cells[laserY * 15 + laserX].classList.add("laser");
  };
  if (e.key == " ") {
    let laser = null;
    laser = setInterval((e) => moveLaser(laser), 100);
    laserIDs.push(laser);
    console.log(laserIDs);
  }
};

document.addEventListener("keydown", (e) => shoot(e));
