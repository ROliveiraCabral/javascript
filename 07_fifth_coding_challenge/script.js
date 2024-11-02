const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoala) {
  if (avgDolphins > avgKoala * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoala})`;
  } else if (avgKoala > avgDolphins * 2) {
    return `Dolphins win (${avgKoala} vs. ${avgDolphins})`;
  } else {
    return "no teams win...";
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

console.log(checkWinner(scoreDolphins1, scoreKoalas1));
