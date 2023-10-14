function Node(value){
    this.value= value
    this.left=null
    this.right=null
}
function binarySearchTree(){
    this.root=null
}

binarySearchTree.prototype.insert=function(value){
    let newNode= new Node(value)
    if(!this.root){
        this.root=newNode
    }
    else{
        insertNode(this.root,newNode)
    }
}
function insertNode(node,newNode){
    if(newNode.value<node.value){
        if(!node.left){
            node.left=newNode
        }else{insertNode(node.left,newNode)}
    }else{
        if(!node.right){
            node.right=newNode
        }else{
            insertNode(node.right,newNode)
        }
    }
}

// Add a function for in-order traversal to the BinarySearchTree prototype
binarySearchTree.prototype.inOrderTraversal = function() {
    const result = [];

    function traverse(node) {
        if (node !== null) {
            traverse(node.left);   // Visit left subtree
            result.push(node.value); // Push the value to the result array
            traverse(node.right);  // Visit right subtree
        }
    }

    traverse(this.root); // Start the traversal from the root
    return result;
};
// preorder
binarySearchTree.prototype.preOrder=function(){
    let result=[]

    function traverse(node){
        if(node!==null){
            result.push(node.value)
            traverse(node.left)
            traverse(node.right)
        }
    }
    traverse(this.root)
    return result
}
binarySearchTree.prototype.postOrder=function(){
    let result=[]
    function traverse(node){
        if(node!==null){
            traverse(node.left)
            traverse(node.right)
            result.push(node.value)
        }
    }
    traverse(this.root)
    return result
}

// Example usage
const bst = new binarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log("In-order Traversal:");
console.log(bst.inOrderTraversal());

