const bill = 1000;

const calculateTips = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const showRes = (bill) => {
  let tip = calculateTips(bill);
  console.log(
    `“The bill was ${bill}, the tip was ${tip}, and the total value ${
      tip + bill
    }”`
  );
};

showRes(bill);
