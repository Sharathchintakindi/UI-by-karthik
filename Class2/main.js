console.log("Hello");

console.log(val1); // Hoisting will allow var variables to be accessiable before you declare them
// console.log(val2); dead temporil zone wil prevent you from accessing let variables before you declare them
// console.log(val3); dead temporil zone wil prevent you from accessing const variables before you declare them

var val1 = 10;

let val2 = 20;

const val3 = 30;

val1 = 20;

val2 = 30;

// val3 = 50; We shouldn't reassign value to const

{
  var val4 = 70;
  let val5 = 80;
  // console.log(val5);
  const val6 = 90;
  // console.log(val6);
}

console.log(val4); // var is a function scope. you can use it outside the block as well

// Let and const are block scope

// console.log(val5); You can't use let varaibles outside the block scope
// console.log(val6); You can't use const varaibles outside the block scope

// Redeclaration

var val1 = 11;

//let val2 = 12; // Redeclaration is not allowed in let variables
//const val3 = 13; // Redeclaration is not allowed in const variables

// Function

function sum(a, b) {
  return a + b;
}

let val7 = 10;
let val8 = 20;
let val9 = sum(val7, val8);
console.log(val9);

// Arrow Function

const add = (a, b) => {
  return a + b;
};

console.log(add(111, 411));

// In arrow function if you have one parameter you dont have to provide the paranthesis
// if in an arrow function, if you have only one statment you dont need to provide the return and curly braces {}

const square = (n) => n * n;

console.log(square(25));

// Conditions

let val10 = true;
if (val10) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val11 = false;
if (val11) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val12 = 0;
if (val12) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val13 = -20;
if (val13) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val14 = NaN;
if (val14) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val15 = "";
if (val15) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val16 = " ";
if (val16) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val17 = "Sharath";
if (val17) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val18 = undefined;
if (val18) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val19 = null;
if (val19) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val20 = {};
if (val20) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val21 = [];
if (val21) {
  console.log("it's true");
} else {
  console.log("it's false");
}

let val22 = function () {
  let val22 = "";
  if (val22) {
    console.log("it's true");
  } else {
    console.log("it's false");
  }
};

