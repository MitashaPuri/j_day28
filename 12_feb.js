//  Topic *********JavaScript Use Strict*******
// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// The "use strict" Directive
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode"


// 1 . "use strict";
x = 3.14;       // This will cause an error because x is not declared


// 2 . Declared inside a function, it has local scope (only the code inside the function is in strict mode):

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}


// 3 . Why Strict Mode?
// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

// Not Allowed in Strict Mode
// Using a variable, without declaring it, is not allowed:

"use strict";
x = 3.14;                // This will cause an error




