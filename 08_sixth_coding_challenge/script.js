const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const bill1 = 125;
const bill2 = 555;
const bill3 = 44;

const bills = [bill1, bill2, bill3];
const tips = [calcTip(bill1), calcTip(bill2), calcTip(bill3)];
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(bills);
console.log(tips);
console.log(totals);
