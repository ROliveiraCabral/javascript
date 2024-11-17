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

//Basic Array Operations

//add elements
const family = ["Patricia", "Valentina", "João"];
const newLength = family.push("Vitória");
console.log(family);
console.log(newLength);

family.unshift("Rodrigo");
console.log(family);

//remove elements
family.pop(); //last element
const popped = family.pop();
console.log(family);
console.log(popped);

family.shift();
console.log(family);

console.log(family.indexOf("Patricia"));
console.log(family.indexOf("Gisele")); // -1 => elemento não encontrado

console.log(family.includes("Valentina"));
console.log(family.includes("André"));

family.push(23);
console.log(family.includes("23")); //strict equality
console.log(family.includes(23));

if (family.includes(23)) {
  console.log("We have a number in our family!");
}

//Introduction to objects
const joao = {
  nome: "João",
  sobrenome: "Ally",
  idade: 2024 - 2016,
  profissao: "estudante",
  amigos: ["Calebe", "Isaque", "Pedro"],
};

console.log(joao);
console.log(joao.sobrenome);
console.log(joao["sobrenome"]);

const nomeKey = "nome";
console.log(joao[nomeKey]);
console.log(joao["sobre" + nomeKey]);

const interestIn = prompt(
  "What do you want to know about Joao? Choose between nome, sobrenome, idade, profissão, amigos"
);

if (joao[interestIn]) {
  console.log(joao[interestIn]);
} else {
  console.log(
    "Wrong request! Choose between nome, sobrenome, idade, profissão, amigos"
  );
}

joao.localizacao = "Brasil";
joao["twitter"] = "@joaoally";

console.log(joao);

console.log(
  `${joao.nome} has ${joao.amigos.length} friends, and his best friend is called ${joao.amigos[0]}`
);

//object methods

const jonas = {
  fistName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSumary: function () {
    return `Jonas is ${this.age} years old, is a ${this.job} and he ${
      this.hasDriversLicense ? "has" : "hasn't"
    } a driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas["age"]);

console.log(jonas.getSumary());

//Iteration - The for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

const elenaArray = [
  "Helena",
  "Melo",
  2024 - 1953,
  "Retired",
  ["Zilda", "Carlos", "Sebastião"],
  true,
];

const types = [];

for (let i = 0; i < elenaArray.length; i++) {
  console.log(elenaArray[i], typeof elenaArray[i]);

  //types[i] = typeof elenaArray[i];
  types.push(typeof elenaArray[i]);
}

console.log(types);

const fechas = [1991, 2007, 1969, 2020];
const calcFechas = [];

for (let i = 0; i < fechas.length; i++) {
  calcFechas.push(2037 - fechas[i]);
}

console.log(calcFechas);

//continue and break
console.log("----------ONLY STRINGS----------");
for (let i = 0; i < elenaArray.length; i++) {
  if (typeof elenaArray[i] !== "string") continue;
  console.log(elenaArray[i], typeof elenaArray[i]);
}

console.log("----------BREAK WITH NUMBER----------");
for (let i = 0; i < elenaArray.length; i++) {
  if (typeof elenaArray[i] === "number") break;
  console.log(elenaArray[i], typeof elenaArray[i]);
}

//looping backwards and loops in loops
console.log("--------------------");
for (let i = elenaArray.length - 1; i >= 0; i--) {
  console.log(elenaArray[i]);
}

console.log("--------------------");
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//while loop
let numero = 1;
while (numero <= 10) {
  console.log(`WHIlE: Lifting weight repetition ${numero}`);
  numero++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
