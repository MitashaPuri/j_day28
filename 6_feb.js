// TOPIC ******* js type conversion**********
// JavaScript Type Conversion
// JavaScript variables can be converted to a new variable and another data type:
// By the use of a JavaScript function
// Automatically by JavaScript itself

// 1.Converting Strings to Numbers
// The global method Number() converts a variable (or a value) into a number
Number("3.14")
Number(Math.PI)
Number(" ")
Number("")
// These will not convert:

Number("99 88")
Number("John")

// 2. number methods-------------->
// Method	Description
// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer
// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

Example
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)

// 2 . Converting Numbers to Strings
// The global method String() can convert numbers to strings
// It can be used on any type of numbers, literals, variables, or expressions:
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression


// 3 .Converting Dates to Numbers
// The global method Number() can be used to convert dates to numbers.

d = new Date();
Number(d)          // returns 1404568027739


//  4 .Converting Dates to Strings
// The global method String() can convert dates to strings.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// The Date method toString() does the same.

Example
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"