 const DoSomething = () => {
  console.log('Hello World');
};

// Ternary operator
let studentAge = 19;
let studentStatus = studentAge >= 18 && 'Adult';
console.log(studentStatus);

let age = 18;
let canDrink = age >= 21 ? 'Yes' : 'No'; // Works as an if-else statement
console.log(canDrink);

// Objects
let student = {
  name: 'John',
  age1: 16,
  isAdult: false
};

const { name, age1, isAdult } = student; //you have to follkow the same order as the object and the names as well
console.log(name, age1, isAdult);
DoSomething();