//  topic **********JavaScript typeof********
//1. Primitive Data Types
// In JavaScript, a primitive value is a single value with no properties or methods.

// JavaScript has 7 primitive data types:

// string
// number
// boolean
// bigint
// symbol
// null
// undefined
// The typeof operator returns the type of a variable or an expression.


// Examples 
typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

// imp note ***************
typeof null           // Returns object


//  2 complex data types
// Complex Data Types
// A complex data type can store multiple values and/or different data types together.

// JavaScript has one complex data type:

// object
// All other complex types like arrays, functions, sets, and maps are just different types of objects.

// The typeof operator returns only two types:

// object
// function


// Example
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function


//  3 array is array
// How to Recognize an Array
// How to know if a variable is an array?

// ECMAScript 5 (2009) defined a new method for this: Array.isArray():

// Example
// Create an Array
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits);

// op ----true
// The instanceof Operator
// The instanceof operator returns true if an object is an instance of a specified object type:

// Examples
// // Create a Date
// const time = new Date();

// (time instanceof Date);


typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"

// ************************Note:*************
// The data type of NaN (Not a Number) is number !
