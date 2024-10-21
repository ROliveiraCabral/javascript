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

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I'm " + 23 + " years old!");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; //"11"
n -= 1;

console.log(n);

//falsy values 0, "", null, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yah! height is defined.");
} else {
  console.log("height is UNDEFINED!");
}

//equality operators
const someAge = "18";
if (someAge === 18) console.log("you just became an adult! (strict)");

if (someAge == 18) console.log("you just became an adult! (loose)");

const favorite = Number(prompt("What's your favorite number?")); // With Number() = Number else = string
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) console.log("cool! 23 is an amazing number."); // 23 === 23 else '23' == 23

//Boolean and Logical Operators
const hasDriversLicense = true;
const hasGoodVisions = true;

console.log(hasDriversLicense && hasGoodVisions);
console.log(hasDriversLicense || hasGoodVisions);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVisions;
if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
