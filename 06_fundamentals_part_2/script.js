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

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

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
