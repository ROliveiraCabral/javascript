// 1 - fundamentos

let js = "amazing";
console.log(40 + 8 + 23 - 10);

// data tyoes
console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log("print firstName = " + firstName);

let javaScriptIsFun = true;
console.log("Is javaScript fun? " + javaScriptIsFun);

let num = 55.95;
console.log("print num = " + num);

console.log("print typeof firstName = " + typeof firstName);
console.log("print typeof javaScriptIsFun = " + typeof javaScriptIsFun);
console.log("print typeof num = " + typeof num);

//variable with reasigned value
javaScriptIsFun = "yes";
console.log("print javascriptIsFun variable now = " + javaScriptIsFun);
console.log("print typeof javaScriptIsFun = " + typeof javaScriptIsFun);

// let, const e var
let age = 31;
age = 30;

const birthYear = 1983;
//birthYear = 1984;

var job = "developer";
job = "teacher";

// Basic Operators
const now = 2037;
const ageRodrigo = now - 1983;
const agePatricia = now - 1979;
console.log(ageRodrigo, agePatricia);
console.log(ageRodrigo * 2, ageRodrigo / 10, 2 ** 3);

const myFirstName = "Rodrigo";
const myLastName = "Cabral";
console.log(myFirstName + " " + myLastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x /= 10;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

console.log(ageRodrigo > agePatricia);
console.log(ageRodrigo <= agePatricia);

const isFullAge = agePatricia >= 18;
console.log(isFullAge);

//look operator precedence mdn
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const personName = "João";
const ativity = "student";
const birth = 2016;
const year = 2024;

const joao =
  "I'm " +
  personName +
  ", I'm a " +
  ativity +
  " and I'm " +
  (year - birth) +
  " years old.";

console.log(joao);

// template literals
const newJoao = `I'm ${personName}, I'm a ${ativity} and I'm ${
  year - birth
} years old.`;
console.log(newJoao);

//writing multyple lines with template literals
console.log(`String with
multiple
lines`);

//Taking decision (if/else)
const personAge = 11;
if (personAge >= 18) {
  console.log("Valentina can start driving license");
} else {
  const yearsLeft = 18 - personAge;
  console.log(
    `sorry Valentina, you are too young! wait another ${yearsLeft} years`
  );
}

//Strings and template literals
const myName = "Rodrigo";
const myJob = "developer";
const myBirthYear = 1983;
const futureYear = 2037;

const rodrigo =
  "I'm " +
  myName +
  ", a " +
  (futureYear - myBirthYear) +
  " years old" +
  ", " +
  myJob +
  "!";
console.log(rodrigo);

const rodrigoNew = `I'm ${myName}, a ${
  futureYear - myBirthYear
} years old, ${myJob}!`;
console.log(rodrigoNew);

console.log(`Just a regular string...`);

console.log(`Strings with \n\
  multiple\n\
  lines`);

console.log(`Strings with
    multiple
    lines`);

//operador ternário
const licenseAge = 19;
const yearsLicense = 18 - licenseAge;

licenseAge >= 18
  ? console.log("Sarah can start driving license")
  : console.log(
      `sorry Sarah, you are too young! wait another ${yearsLicense} years`
    );

const dateYear = 2012;
let century;

dateYear <= 2000 ? (century = 20) : (century = 21);
console.log(`século: ${century}`);
