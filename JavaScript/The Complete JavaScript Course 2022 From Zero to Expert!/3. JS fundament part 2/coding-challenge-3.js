function showBMICompareResult(info1, info2) {
  let bmi1 = info1.calcBMI();
  let bmi2 = info2.calcBMI();
  if (bmi1 > bmi2) {
    console.log(
      `${info1.name}'s BMI (${bmi1}) is higher than ${info2.name}'s (${bmi2})!`
    );
  } else if (bmi2 < bmi1) {
    console.log(
      `${info2.name}'s BMI ($${bmi2}) is higher than ${info1.name}'s (${bmi1})!`
    );
  } else {
    console.log(
      `${info1.name}'s BMI (${bmi1}) is equal to ${info2.name}'s (${bmi2})!`
    );
  }
}

let info1 = {
  name: "John Cena",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

let info2 = {
  name: "The Rock",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

showBMICompareResult(info1, info2);

// CLEANCODE: Duplicate code when calculating BMI
