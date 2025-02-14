// today's topic : ************classes*************
// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

// 1.creating a class
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// 2 .create a obj 
// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

//  3 .The Constructor Method
// The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

//  4. class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML =
// "My car is " + myCar.age() + " years old.";