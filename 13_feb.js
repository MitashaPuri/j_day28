// *****************Arrow functions **************
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
// let myFunction = (a, b) => a * b;


//  1. difference between before and after
// Before Arrow:
hello = function() {
  return "Hello World!";
}

// With Arrow Function:
hello = () => {
  return "Hello World!";
}


//  even shorter way 
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
// Arrow Functions Return Value by Default:
hello = () => "Hello World!";


//  2. regular funcction
// With a regular function this represents the object that calls the function:

// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);


// 3. With an arrow function this represents the owner of the function:

// Arrow Function:
hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);

  