// topic *********js errors********
// Throw, and Try...Catch...Finally
// The ***try statement defines a code block to run (to try).
// The ****catch statement defines a code block to handle any error.
// The *****finally statement defines a code block to run regardless of the result.
// The *******throw statement defines a custom error.


// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }


// 1. JavaScript Throws Errors
// When an error occurs, JavaScript will normally stop and generate an error message.

// The technical term for this is: JavaScript will throw an exception (throw an error).

// JavaScript will actually create an Error object with two properties: name and message.


// 2. The throw Statement
// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object:


// 3 .The finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result:

// Syntax
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }


//  4 . Example

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x.trim() == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }


// 5 .  The Error Object
// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Error Object Properties
// Property	Description
// name	Sets or returns an error name
// message	Sets or returns an error message (a string)
// Error Name Values
// Six different values can be returned by the error name property:

// Error Name	Description
// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred
  