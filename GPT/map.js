function Map() {
  this.items = {};
}

// Check if a key exists in the map
Map.prototype.has = function(key) {
  return this.items.hasOwnProperty(key);
};

// Get the value associated with a key
Map.prototype.get = function(key) {
  if (this.has(key)) {
    return this.items[key];
  }
  return undefined;
};

// Set a key-value pair in the map
Map.prototype.set = function(key, value) {
  this.items[key] = value;
};

// Remove a key-value pair from the map
Map.prototype.remove = function(key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// Get all the keys in the map
Map.prototype.keys = function() {
  return Object.keys(this.items);
};

// Get all the values in the map
Map.prototype.values = function() {
  return Object.values(this.items);
};

// Get the size of the map
Map.prototype.size = function() {
  return Object.keys(this.items).length;
};

// Clear the map
Map.prototype.clear = function() {
  this.items = {};
};

// Example usage
var map = new Map();
map.set("name", "John");
map.set("college","ait")
map.set("age", 25);
map.set("city", "New York");

console.log(map.get("name")); // Output: "John"
console.log(map.has("age")); // Output: true
console.log(map.remove("city")); // Output: true

console.log(map.keys()); // Output: ["name", "age"]
console.log(map.values()); // Output: ["John", 25]
console.log(map.size()); // Output: 2

map.clear();
console.log(map.size()); // Output: 0
