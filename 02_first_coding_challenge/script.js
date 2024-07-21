let markMass, markHeight, johnMass, johnHeight, markHeightBMI;

//test 1
markMass = 78;
markHeight = 1.69;
let bmiMark = markMass / markHeight ** 2;
console.log("Mark bmi is: " + bmiMark);

johnMass = 92;
johnHeight = 1.95;
let bmiJohn = johnMass / johnHeight ** 2;
console.log("John bmi is: " + bmiJohn);

markHeightBMI = bmiMark > bmiJohn;
console.log("Is Mark bmi higher than John bmi? " + markHeightBMI);

//test 2
markMass = 95;
markHeight = 1.88;
bmiMark = markMass / markHeight ** 2;
console.log("Mark bmi is: " + bmiMark);

johnMass = 85;
johnHeight = 1.76;
bmiJohn = johnMass / johnHeight ** 2;
console.log("John bmi is: " + bmiJohn);

markHeightBMI = bmiMark > bmiJohn;
console.log("Is Mark bmi higher than John bmi? " + markHeightBMI);
