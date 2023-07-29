const multiply = (a, b) => {
  return a * b;
};
// console.log(multiply(2, 3));

const student = {
  name: "chaithanya",
  age: 26,
  greet: function () {
    console.log("Hi, I am " + this.name);
  },
};
student.greet();
