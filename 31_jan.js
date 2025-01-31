// 1.Set
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// How to Create a Set
// You can create a JavaScript Set by:
// Passing an array to new Set()
// Create an empty set and use add() to add values
// ************Sets are Objects

// 2.Map
// How to Create a Map
// You can create a JavaScript Map by:
// i. Passing an Array to new Map()
// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// ii.Create a Map and use Map.set()
// The set() Method
// You can add elements to a Map with the set() method:
// Create a Map
const fruits2 = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// iii The get() Method
// The get() method gets the value of a key in a Map:
fruits.get("apples");    // Returns 500


