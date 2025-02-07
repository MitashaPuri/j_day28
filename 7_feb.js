//  Today's Topic **********destructuring**************
// Destructuring Assignment Syntax
// The destructuring assignment syntax unpack object properties into variables:
let {firstName1, lastName1} = person;
// It can also unpack arrays and any other iterables:
// let [firstName, lastName] = person;

// 1 .Object Destructuring
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;
//   The order of the properties does not matter:

Example
// Create an Object
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName2, firstName2} = person;


//  2 .For potentially missing properties we can set default values:
// Example
// // Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {firstName, lastName, country = "US"} = person;


// 3 String Destructuring
// One use for destructuring is unpacking string characters.

Example
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
document.getElementById("demo").innerHTML = a1;


//  4 We can skip array values using two or more commas:

Example
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,,fruit2] = fruits;

// 5 Array Position Values
// We can pick up values from specific index locations of an array:

// Example
// // Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// // Destructuring
// let {[0]:fruit1 ,[1]:fruit2} = fruits;

// 6 The Rest Property
// You can end a destructuring syntax with a rest property.
// This syntax will store all remaining values into a new array:

Example
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers

  
