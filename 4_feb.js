//Topic: ***map methods******
//1.Map.has()
// The has() method returns true if a key exists in a map:
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("demo").innerHTML = fruits.has("apples");
//   op true
fruits.delete("apples");
document.getElementById("demo").innerHTML = fruits.has("apples");
//op : false


// 2. Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a map:
// Create a Map
const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text2 = "";
  fruits2.forEach (function(value, key) {
    text2 += key + ' = ' + value + "<br>"
  })
  
  document.getElementById("demo").innerHTML = text;


//   3 Map.entries()
// The entries() method returns an iterator object with the [key,values] in a map:
// Create a Map
const fruits3 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text3= "";
  for (const x of fruits3.entries()) {
    text2 += x + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;


//   4 Map.keys()
// The keys() method returns an iterator object with the keys in a map
// Create a Map
const fruits4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text4 = "";
  for (const x of fruits4.keys()) {
    text += x + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;

//   5 .Map.values()
// The values() method returns an iterator object with the values in a map:
// Create a Map
const fruits5 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text5= "";
  for (const x of fruits5.values()) {
    text5 += x + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text5;

//   6 . Objects as Keys
// Being able to use objects as keys is an important Map feature.
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits6 = new Map();

// Add the Objects to the Map
fruits6.set(apples, 500);
fruits6.set(bananas, 300);
fruits6.set(oranges, 200);

document.getElementById("demo").innerHTML = fruits6.get(apples);

// ********imp note*********
// Remember: The key is an object (apples), not a string ("apples"):
// Example
// fruits.get("apples");  // Returns undefined


// 7 . JavaScript Map.groupBy()
// ES2024 added the Map.groupBy() method to JavaScript.
// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Map.groupBy() method does not change the original object.

// Create an Array
const fruits7 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to select low volumes 
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by ok and low
  const result = Map.groupBy(fruits7, myCallback);
  
  // Display Results
  let text ="These fruits are Ok: <br>";
  for (let x of result.get("ok")) {
    text += x.name + " " + x.quantity + "<br>";
  }
  text += "<br>These fruits are low: <br>";
  for (let x of result.get("low")) {
    text += x.name + " " + x.quantity + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
  
