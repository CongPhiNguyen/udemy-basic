const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 1
const events = [...new Set([...gameEvents])];
console.log(events);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Task 4
let isSecondHalf = false;
console.log("[FIRST HALF]");
gameEvents.forEach((val, key) => {
  if (!isSecondHalf && key >= 45) {
    console.log("[SECOND HALF]");
    isSecondHalf = true;
  }
  console.log(`${key} : ${val}`);
});
