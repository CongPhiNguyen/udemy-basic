function calculateBMI(mass, height) {
  return mass / (height * height);
}
function showBMICompareResult(MarkBMI, JohnBMI) {
  if (MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
  } else if (JohnBMI > MarkBMI) {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
  } else {
    console.log(`John's BMI (${JohnBMI}) is equal to Mark's (${MarkBMI})!`);
  }
}

let MarkInfo = {
  mass: 78,
  height: 1.69,
};

let JohnInfo = {
  mass: 92,
  height: 1.95,
};

let MarkBMI = calculateBMI(MarkInfo.mass, MarkInfo.height);
let JohnBMI = calculateBMI(JohnInfo.mass, JohnInfo.height);
console.log("Mark BMI", MarkBMI);
console.log("John BMI", JohnBMI);
let markHigherBMI = MarkBMI > JohnBMI;
showBMICompareResult(MarkBMI, JohnBMI);

MarkInfo = {
  mass: 95,
  height: 1.88,
};

JohnInfo = {
  mass: 85,
  height: 1.76,
};

console.log("-------------------------------------------");

MarkBMI = calculateBMI(MarkInfo.mass, MarkInfo.height);
JohnBMI = calculateBMI(JohnInfo.mass, JohnInfo.height);
console.log("Mark BMI", MarkBMI);
console.log("John BMI", JohnBMI);
markHigherBMI = MarkBMI > JohnBMI;
showBMICompareResult(MarkBMI, JohnBMI);

// CLEANCODE: Duplicate code when calculating BMI
