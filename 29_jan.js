//1. Dates 
// new Date()
// new Date(date string)
// new Date(year,month)
// const d = new Date();
// document.getElementById("demo").innerHTML = d;

// examples
// 5 numbers specify year, month, day, hour, and minute:

// Example
// const d = new Date(2018, 11, 24, 10, 33);

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
// Example
// const d = new Date();
// d.toString();

// 2.For in loop
for (key in object) {
    // code block to be executed
  }

  const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

// op/--John Doe 25

// 3. For each
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// 4. For of
// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.


// 5.while loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }'

// 6. Do while loop
// The do while loop is a variant of the while loop. 
// This loop will execute the code block once, 
// before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// do {
//     // code block to be executed
//   }
//   while (condition);

// 7. break continue
// The break statement terminates the execution of a loop or a switch statement. 
// The continue statement skips th
// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.


// 8. Iteration 
// 8.1 Iterating over a String
// for..of loop to iterate over the elements of a string:
// const name = "W3Schools";
// for (const x of name) {
//   // code block to be executed
// }
// Iterating over an Array

// 9.Sets
// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.

