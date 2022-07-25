// Task 1
let player1 = [];
let player2 = [];
// task 2
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

// Task 3:
const allPlayers = [...player1, ...player2];

// Task 4
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
const player2Final = [...player2, "Ziyech", "Pulisic", "Azpilicueta"];

const game = {
  score: "0-6",
  goals: ["Kai Havert", "Kante", "Kai Havert", "Ziyech", "Mount", "Kai Havert"],
  odd: {
    team1: 1.33,
    team2: 2.45,
  },
};

// Task 5
let scores = game.score.split("-");
if (Number(scores[0]) > Number(scores[1])) {
  console.log("Bayern Munich");
} else if (Number(scores[0]) < Number(scores[1])) {
  console.log("Chelsea");
} else {
  console.log("Draw");
}

// Task 6
const printGoals = (goals) => {
  let goalsObject = {};
  goals.forEach((goal) => {
    if (goalsObject.hasOwnProperty(goal)) {
      goalsObject[goal]++;
    } else {
      goalsObject[goal] = 1;
    }
  });
  Object.keys(goalsObject).forEach((name) => {
    console.log(`${name} has score ${goalsObject[name]} goal(s)`);
  });
};

printGoals(game.goals);

// Task 7: Likely to win
const likelyToWin = (odd) => {
  console.log(
    odd.team1 < odd.team2
      ? "Bayern Munich is likely to win!"
      : "Chelsea is likely to win!"
  );
};

likelyToWin(game.odd);
