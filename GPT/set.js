function Set() {
    this.items = {};
  }
  
  // Check if an element exists in the set
  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value);
  };
  
  // Add an element to the set
  Set.prototype.add = function(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  };
  
  // Remove an element from the set
  Set.prototype.remove = function(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  };
  
  // Get the size of the set
  Set.prototype.size = function() {
    return Object.keys(this.items).length;
  };
  
  // Get all the values in the set
  Set.prototype.values = function() {
    return Object.values(this.items);
  };
  
  // Example usage
  var set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  set.add(4);
  set.add(5);
  
  console.log(set.values()); // Output: [1, 2, 3]
  console.log(set.size()); // Output: 3
  console.log(set.has(2)); // Output: true
  console.log(set.has(4)); // Output: false
  
  set.remove(2);
  console.log(set.values()); // Output: [1, 3]
  console.log(set.size()); // Output: 2
  console.log(set.size()); // Output: 2

  