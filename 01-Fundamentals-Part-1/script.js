// 1 - fundamentos

let js = "amazing";
console.log(40 + 8 + 23 - 10);

// 2 - data tyoes
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

// 3 - let, const e var
let age = 31;
age = 30;

const birthYear = 1983;
//birthYear = 1984;

var job = "developer";
job = "teacher";

// 4 - Basic Operators
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
