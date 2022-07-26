let player1 = [];
let player2 = [];
const gk = "Manuel Neuer";
const fieldPlayers = [
  "Pavard",
  "Upamecano",
  "De Ligt",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Gnabry",
  "Muller",
  "Sane",
  "Coman",
];

const gk2 = "Mendy";
const fieldPlayer2s = [
  "James",
  "Koulibaily",
  "Silva",
  "Chilwell",
  "Kante",
  "Kovacic",
  "Jorginho",
  "Mount",
  "Havert",
  "Werner",
];

player1 = [gk, ...fieldPlayers];
player2 = [gk2, ...fieldPlayer2s];
const allPlayers = [...player1, ...player2];
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
const player2Final = [...player2, "Ziyech", "Pulisic", "Azpilicueta"];

const game = {
  score: "0-6",
  goals: ["Kai Havert", "Kante", "Kai Havert", "Ziyech", "Mount", "Kai Havert"],
  odd: {
    team1: 1.33,
    x: 1.5,
    team2: 2.45,
  },
};

// Task 1:
const printGoals = (goalScores) => {
  goalScores.forEach((score, index) => {
    console.log(`Goal ${index + 1} : ${score}`);
  });
};

printGoals(game.goals);

// Task 2:
const averageOdd = (oddsArray) => {
  return oddsArray.reduce((total, val) => total + val, 0) / oddsArray.length;
};

console.log(averageOdd(Object.values(game.odd)));

// Task 3:
const printOdd = (odds) => {
  const { team1: odd1, x, team2: odd2 } = odds;
  console.log(`Odd of victory Bayern Munich: ${odd1}
Odd of draw: ${x}
Odd of victory Chelsea : ${odd2}
  `);
};

printOdd(game.odd);

// Task 4:
createGameScoreCounter = (goals) => {
  let goalsObject = {};
  goals.forEach((goal) => {
    if (goalsObject.hasOwnProperty(goal)) {
      goalsObject[goal]++;
    } else {
      goalsObject[goal] = 1;
    }
  });
  return goalsObject;
};
let scores = createGameScoreCounter(game.goals);
console.log(scores);
