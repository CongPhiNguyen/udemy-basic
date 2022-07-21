let dolphinScores = [96, 108, 89];
let koalaScores = [88, 91, 110];

// CLEANCODE: Each function do a single ability
// CLEANCODE: Not using any flag in bonus
const calcAverage = (scores) => {
  return (
    scores.reduce((total, score) => {
      return total + score;
    }, 0) / scores.length
  );
};

const checkWinner = (dolphinScoreAverage, koalaScoreAverage) => {
  if (dolphinScoreAverage > koalaScoreAverage) {
    console.log("Dolphins won against the Koalas.");
  } else if (dolphinScoreAverage < koalaScoreAverage) {
    console.log("Koalas won against the Dolphins.");
  } else {
    console.log("It's a draw match");
  }
};

const hasMinimumScoreOf = (scores, minimumScore) => {
  return scores.every((score) => score >= minimumScore);
};

const checkWinnerBonus1 = (dolphinScore, koalaScore) => {
  // Can optimized here a little bit but I think now it is fine
  if (hasMinimumScoreOf(dolphinScore, 100)) {
    if (!hasMinimumScoreOf(koalaScore, 100)) {
      console.log("Dolphins won against the Koalas.");
    } else {
      if (calcAverage(dolphinScore) > calcAverage(koalaScore)) {
        console.log("Dolphins won against the Koalas.");
      } else if (calcAverage(dolphinScore) < calcAverage(koalaScore)) {
        console.log("Koalas won against the Dolphins.");
      } else {
        console.log("It's a draw match");
      }
    }
  } else {
    if (!hasMinimumScoreOf(koalaScore, 100)) {
      console.log("It's a draw match");
    } else {
      console.log("Koalas won against the Dolphins.");
    }
  }
};

const checkWinnerBonus2 = (dolphinScore, koalaScore) => {
  if (hasMinimumScoreOf(dolphinScore, 100)) {
    if (!hasMinimumScoreOf(koalaScore, 100)) {
      console.log("Dolphins won against the Koalas.");
    } else {
      if (calcAverage(dolphinScore) > calcAverage(koalaScore)) {
        console.log("Dolphins won against the Koalas.");
      } else if (calcAverage(dolphinScore) < calcAverage(koalaScore)) {
        console.log("Koalas won against the Dolphins.");
      } else {
        console.log("It's a draw match");
      }
    }
  } else {
    if (!hasMinimumScoreOf(koalaScore, 100)) {
      console.log("No one win the trophy");
    } else {
      console.log("Koalas won against the Dolphins.");
    }
  }
};

let averageDolphinScore = calcAverage(dolphinScores);
console.log("Average Dolphin", averageDolphinScore);

let averageKoalaScore = calcAverage(koalaScores);
console.log("Average Koala", averageKoalaScore);

checkWinner(averageDolphinScore, averageKoalaScore);
checkWinnerBonus1(dolphinScores, koalaScores);
checkWinnerBonus2(dolphinScores, koalaScores);
