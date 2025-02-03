// topic**********Map methods****
// 1.Map new ()
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  let numb = fruits.get("apples");
  //op 500

//   2.Map.get()
// You get the value of a key in a map with the get() method

// 3.Map.set()
// You can add elements to a map with the set() method:
// Create a Map
const fruits2 = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// 4 Map.size
// The size property returns the number of elements in a map:
const fruits3= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("demo").innerHTML = fruits.size;

// 5.Map.delete()
// The delete() method removes a map element:
const fruits4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Delete an Element
  fruits.delete("apples");
  
  document.getElementById("demo").innerHTML = fruits.size;
//   op -----2 

// 6.Map.clear()
// The clear() method removes all the elements from a map:
const fruits6 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Clear the Map
  fruits.clear();
  
  document.getElementById("demo").innerHTML = fruits.size;
//   op ---------------0 coz it deleted whole map 
