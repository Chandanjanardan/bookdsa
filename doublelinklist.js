function Node (element){
    this.element=element;
    this.next=null;
    this.previous=null;

}

function LList(){
this.head=new Node("head")
this.insert=insert
this.find=find
this.display=display
this.dispReverse=dispReverse
this.remove=remove
this.findLast=findLast
}
function findLast(){
    var currNode=this.head
    while(!(currNode.next==null)){
        currNode=currNode.next
    }
    currNode
}

function dispReverse(){
    var currNode=this.head;
    currNode=this.findLast()
    while(!(currNode.previous==null)){
        console.log(currNode.element)
        currNode=currNode.previous
    }
}

function find(item){
    var currNode=this.head;
    while(!(currNode.element==item)){
        currNode=currNode.next
    }
    console.log(currNode.element)
    return currNode
}

function remove(item){
    var currNode=this.find(item)
    if(!(currNode.next==null)){
        currNode.previous.next =currNode.next;
        currNode.next.previous=currNode.previous
        currNode.next=null
        currNode.previous=null
    }
}

function display(){
    var current=this.head
    while(!(current.next==null)){
        console.log(current.next.element);
        current=current.next
    }
}

function insert(newElement,item){
    var newNode=new Node(newElement);
    var current=this.find(item)
    newNode.next=current.next
    newNode.previous=current
    current.next=newNode
}
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();

cities.remove("Carlisle");
cities.display();

