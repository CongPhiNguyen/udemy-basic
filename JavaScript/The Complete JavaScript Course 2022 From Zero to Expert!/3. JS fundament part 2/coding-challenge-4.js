const bill = 1000;

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const showRes = (bill) => {
  let tip = calcTip(bill);
  console.log(
    `“The bill was ${bill}, the tip was ${tip}, and the total value ${
      tip + bill
    }”`
  );
};

const calcAverage = (arr) => {
  return arr.reduce((total, arr) => total + arr, 0) / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = bills.map((bill) => calcTip(bill));
console.log("tips", tips);

const totals = bills.map((bill) => bill + calcTip(bill));
console.log("totals", totals);

console.log("Average total money", calcAverage(totals));
