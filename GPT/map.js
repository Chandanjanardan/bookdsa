// function Map() {
//   this.items = {};
// }

// // Check if a key exists in the map
// Map.prototype.has = function(key) {
//   return this.items.hasOwnProperty(key);
// };

// // Get the value associated with a key
// Map.prototype.get = function(key) {
//   if (this.has(key)) {
//     return this.items[key];
//   }
//   return undefined;
// };

// // Set a key-value pair in the map
// Map.prototype.set = function(key, value) {
//   this.items[key] = value;
// };

// // Remove a key-value pair from the map
// Map.prototype.remove = function(key) {
//   if (this.has(key)) {
//     delete this.items[key];
//     return true;
//   }
//   return false;
// };

// // Get all the keys in the map
// Map.prototype.keys = function() {
//   return Object.keys(this.items);
// };

// // Get all the values in the map
// Map.prototype.values = function() {
//   return Object.values(this.items);
// };

// // Get the size of the map
// Map.prototype.size = function() {
//   return Object.keys(this.items).length;
// };

// // Clear the map
// Map.prototype.clear = function() {
//   this.items = {};
// };

// // Example usage
// var map = new Map();
// map.set("name", "John");
// map.set("college","ait")
// map.set("age", 25);
// map.set("city", "New York");

// console.log(map.get("name")); // Output: "John"
// console.log(map.has("age")); // Output: true
// console.log(map.remove("city")); // Output: true

// console.log(map.keys()); // Output: ["name", "age"]
// console.log(map.values()); // Output: ["John", 25]
// console.log(map.size()); // Output: 2

// map.clear();
// console.log(map.size()); // Output: 0


// map store key and valua pair
// remember the orignal instertion order
// used both primetive and objects
// key in the map is unique

// const map1= new Map();
// map1.set(1,"a")
// map1.set("b",1)
// map1.set("c",1)

// console.log(map1.get("a"))


// // initilizing a again 
// map1.set("a",97)
// console.log(map1.get("a"))

// // size of map 
// // console.log(map1.size)

// // delete 
// map1.delete("b")

// // console.log(map1.size)


// const myMap= new Map();
// const keyString = "a string";
// const keyObj = {}
// const keyFunc = function (){}

// // setting the value
//  myMap.set(keyString,"value associated with stting ")
//  myMap.set(keyObj,"value associated with keyObj")
//  myMap.set(keyFunc,"value assosiated with keyFunc")

//  console.log(myMap.size)


// //  getting the value 
// console.log(myMap.get(keyString))
// console.log(myMap.get(keyObj))
// console.log(myMap.get(keyFunc))



// -----------------------------------------****-------------------
const myMap = new Map();
myMap.set(0,"zero")
myMap.set(1,"one")
myMap.set(2,"two")

for (let [key,value] of myMap){
  console.log(`${key} = ${value}`)
}

for (let key of myMap.keys()){
  console.log(key)
}

for (let value of myMap.values()){
  console.log(value)
}

for (let [key,value] of myMap.entries()){
  console.log(`${key} = ${value}`)
}
// relation between array object


