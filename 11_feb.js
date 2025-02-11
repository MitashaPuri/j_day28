// <!-- Topic *******scope******** -->
// <!-- Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:
// 1 .Block scope
// 2.Function scope
// 3.Global scope -->

// 1. Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block: 
//Example 
{
  let x = 2;
}
// x can NOT be used here
// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// Example
{
  var x = 2;
}
// x CAN be used here



// 2 .Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:
Example
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
// Local variables have Function Scope:
// They can only be accessed from within the function.


// 3 .Function Scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
