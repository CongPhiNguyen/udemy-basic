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

showRes(bill);

const bills = [100, 200, 499, 133];

const tips = bills.map((bill) => calcTip(bill));
console.log("tips", tips);

const totals = bills.map((bill) => bill + calcTip(bill));
console.log("totals", totals);
