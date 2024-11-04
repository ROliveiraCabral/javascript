//ajuda a debugar o código apontando erros
"use strict";

let hasDriversLicense = false;
const passTest = true;

//Erro ao escrever o nome da variável
//if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//palavra reservada;
//const interface = "Audio";

//function
function logger() {
  console.log("My name is Rodrigo");
}

//calling | running | invoking the function
logger();

//Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//armazenando retorno e imprimindo
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//imprimindo diretamente sem armazenar retorno
//console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declarations vs expressions
//function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1983);

//function expression (anonymous)
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge1(1983);

console.log(age1, age2);

//Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1983);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1983, "Rodrigo Cabral"));
console.log(yearUntilRetirement(1979, "Patrícia Ally"));

//Introduction to Arrays
const friend1 = "Walace";
const friend2 = "Leonardo";
const friend3 = "Leandro";

const friends = ["Walace", "Leonardo", "Leandro"];
console.log(friends);

const years = new Array(1991, 1983, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Maurício";
console.log(friends);

const firstName = "Rodrigo";

const rodrigo = [firstName, "Cabral", 2024 - 1983, "Developer", friends];
console.log(rodrigo);

console.log(calcAge1(years[0])); //operações com array
console.log(calcAge1(years[1])); //operações com array
console.log(calcAge1(years[years.length - 1])); //operações com array

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];

console.log(ages);
