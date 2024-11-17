const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  bmi: function calcBMI() {
    return this.mass / (this.height * this.height);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  bmi: function calcBMI() {
    return this.mass / (this.height * this.height);
  },
};

if (mark.bmi() > john.bmi()) {
  console.log(
    `${mark.fullName} BMI ${mark.bmi()} is higher than ${
      john.fullName
    } BMI ${john.bmi()}`
  );
} else {
  console.log(
    `${john.fullName} BMI ${john.bmi()} is higher than ${
      mark.fullName
    } BMI ${mark.bmi()}`
  );
}
