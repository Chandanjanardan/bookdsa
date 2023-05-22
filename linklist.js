// node 
function Node(element){
    this.element=element;
    this.next=null
}

function Llist(){
    this.head=new Node("head")
    this.find=find
    this.insert=insert
    this.findPrevious=findPrevious
    this.remove=remove
    this.display=display
}
// find element 
function find(item){
    var currNode=this.head
    while(currNode.element!=item){
        currNode=currNode.next
    }
    return currNode
}

// insert
function insert(newElement,item){
    var newNode=new Node(newElement)
    var current=this.find(item)
    newNode.next=current.next
    current.next=newNode
}
// display
function display(){
    var currNode=this.head
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode=currNode.next
    }
}
// output

// var cities = new Llist();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Alma", "Russellville");
// cities.display()


// removing so find previous item 
function findPrevious(item){
    var currNode=this.head;
    while((currNode.next!==null &&(currNode.next.element !=item))){
        currNode=currNode.next
    }
    return currNode
}
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
   }
   
var cities = new Llist();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();


