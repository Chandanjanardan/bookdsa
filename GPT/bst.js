




  // Node constructor function
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Binary Search Tree constructor function
function BinarySearchTree() {
  this.root = null;
}

// Insert a value into the BST
BinarySearchTree.prototype.insert = function(value) {
  var newNode = new Node(value);

  if (this.root === null) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
};

// Helper function tnsoo recursively insert a node into the BST
function insertNode(node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

// Search for a value in the BST
BinarySearchTree.prototype.search = function(value) {
  return searchNode(this.root, value);
};

// Helper function to recursively search for a value in the BST
function searchNode(node, value) {
  if (node === null) {
    return false;
  } else if (value < node.value) {
    return searchNode(node.left, value);
  } else if (value > node.value) {
    return searchNode(node.right, value);
  } else {
    return true;
  }
}

// In-order traversal of the BST (returns the values in ascending order)
BinarySearchTree.prototype.inOrderTraversal = function() {
  var result = [];

  function traverse(node) {
    if (node !== null) {
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
  }

  traverse(this.root);
  return result;
};

// Display the BST in a readable format
BinarySearchTree.prototype.display = function() {
  displayNode(this.root, 0);
};

// Helper function to recursively display the BST
function displayNode(node, level) {
  if (node !== null) {
    var indent = " ".repeat(level * 4);
    console.log(indent + node.value);
    displayNode(node.left, level + 1);
    displayNode(node.right, level + 1);
  }
}

// Example usage
var bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log("In-order Traversal:");
console.log(bst.inOrderTraversal()); // Output: [1, 3, 6, 8, 10, 14]

console.log("BST Structure:");
bst.display();
