// Node constructor function
function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  // Linked list constructor function
  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  // Add a node to the beginning of the linked list
  LinkedList.prototype.prepend = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };
  
  // Add a node to the end of the linked list
  LinkedList.prototype.append = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode; // Set the next pointer of the last node to the new node
        this.tail = newNode; // Update the tail to be the new node    //doubt
    //   this.tail.next = newNode;
    //   this.tail = newNode;
    }
  };
  
  // Insert a node at a specific index
  LinkedList.prototype.insertAtIndex = function(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
  
    const newNode = new Node(value);
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
  
    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    if (currentIndex === index) {
      newNode.next = currentNode;
      prevNode.next = newNode;
    } else {
      throw new Error('Index out of bounds.');
    }
  };
  
  // Get the value at a specific index
  LinkedList.prototype.peekAtIndex = function(index) {
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentNode && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    if (currentIndex === index && currentNode) {
      return currentNode.value;
    } else {
      throw new Error('Index out of bounds.');
    }
  };
  
  // Remove a node at a specific index
  LinkedList.prototype.removeAtIndex = function(index) {
    if (!this.head) {
      throw new Error('List is empty.');
    }
  
    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
  
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
  
    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    if (currentIndex === index && currentNode) {
      prevNode.next = currentNode.next;
      if (!prevNode.next) {
        this.tail = prevNode;
      }
    } else {
      throw new Error('Index out of bounds.');
    }
  };
  
  // Remove the first node with a specific value
  LinkedList.prototype.removeValue = function(value) {
    if (!this.head) {
      throw new Error('List is empty.');
    }
  
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
  
    let currentNode = this.head;
    let prevNode = null;
  
    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  
    if (currentNode && currentNode.value === value) {
      prevNode.next = currentNode.next;
      if (!prevNode.next) {
        this.tail = prevNode;
      }
    } else {
      throw new Error('Value not found.');
    }
  };
  
  // Display the linked list
  LinkedList.prototype.display = function() {
    let currentNode = this.head;
    let values = [];
  
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
  
    console.log(values.join(' -> '));
  };
  
  // Example usage
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.prepend(5);
  list.insertAtIndex(15, 1);
  list.display(); // Output: 5 -> 15 -> 10 -> 20
  console.log(list.peekAtIndex(2)); // Output: 10
  list.removeAtIndex(1);
  list.removeValue(20);
  list.display(); // Output: 5 -> 10
  




//   singly link list 
// // Node constructor function
// function Node(value) {
//     this.value = value;
//     this.next = null;
//   }
  
//   // Linked list constructor function
//   function LinkedList() {
//     this.head = null;
//   }
  
//   // Add a node to the beginning of the linked list
//   LinkedList.prototype.prepend = function(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//   };
  
//   // Add a node to the end of the linked list
//   LinkedList.prototype.append = function(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let currentNode = this.head;
//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = newNode;
//     }
//   };
  
//   // Insert a node at a specific index
//   LinkedList.prototype.insertAtIndex = function(value, index) {
//     if (index === 0) {
//       this.prepend(value);
//       return;
//     }
  
//     const newNode = new Node(value);
//     let currentNode = this.head;
//     let prevNode = null;
//     let currentIndex = 0;
  
//     while (currentNode && currentIndex < index) {
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//       currentIndex++;
//     }
  
//     if (currentIndex === index) {
//       newNode.next = currentNode;
//       prevNode.next = newNode;
//     } else {
//       throw new Error('Index out of bounds.');
//     }
//   };
  
//   // Get the value at a specific index
//   LinkedList.prototype.peekAtIndex = function(index) {
//     let currentNode = this.head;
//     let currentIndex = 0;
  
//     while (currentNode && currentIndex < index) {
//       currentNode = currentNode.next;
//       currentIndex++;
//     }
  
//     if (currentIndex === index && currentNode) {
//       return currentNode.value;
//     } else {
//       throw new Error('Index out of bounds.');
//     }
//   };
  
//   // Remove a node at a specific index
//   LinkedList.prototype.removeAtIndex = function(index) {
//     if (!this.head) {
//       throw new Error('List is empty.');
//     }
  
//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }
  
//     let currentNode = this.head;
//     let prevNode = null;
//     let currentIndex = 0;
  
//     while (currentNode && currentIndex < index) {
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//       currentIndex++;
//     }
  
//     if (currentIndex === index && currentNode) {
//       prevNode.next = currentNode.next;
//     } else {
//       throw new Error('Index out of bounds.');
//     }
//   };
  
//   // Remove the first node with a specific value
//   LinkedList.prototype.removeValue = function(value) {
//     if (!this.head) {
//       throw new Error('List is empty.');
//     }
  
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       return;
//     }
  
//     let currentNode = this.head;
//     let prevNode = null;
  
//     while (currentNode && currentNode.value !== value) {
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//     }
  
//     if (currentNode && currentNode.value === value) {
//       prevNode.next = currentNode.next;
//     } else {
//       throw new Error('Value not found.');
//     }
//   };
  
//   // Display the linked list
//   LinkedList.prototype.display = function() {
//     let currentNode = this.head;
//     let values = [];
  
//     while (currentNode) {
//       values.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
  
//     console.log(values.join(' -> '));
//   };
  
//   // Example usage
//   const list = new LinkedList();
//   list.append(10);
//   list.append(20);
//   list.prepend(5);
//   list.insertAtIndex(15, 1);
//   list.display(); // Output: 5 -> 15 -> 10 -> 20
//   console.log(list.peekAtIndex(2)); // Output: 10
//   list.removeAtIndex(1);
//   list.removeValue(20);
//   list.display(); // Output: 5 -> 10
  