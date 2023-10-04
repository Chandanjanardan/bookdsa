function Node(value){
    this.value=value
    this.next= null
}

function LinkList(){
    this.head=null
    this.tail=null
}
LinkList.prototype.prepend=function(value){
    let newNode= new Node(value)
    if(!this.head){
       this.head=newNode    // newNode=this.head
       this.tail=newNode    //newNode=this.head
        
    }else{
        newNode.next= this.head
        this.head= newNode
    }
}
LinkList.prototype.append=function(value){
    let newNode= new Node(value)
    if(!this.head){
        this.head=newNode
        this.tail=newNode
    }
    let currentNode=this.head
    while(currentNode.next){
        currentNode=currentNode.next
    }
    currentNode.next=newNode
    this.tail=newNode
}
// inster at specific index
LinkList.prototype.insertAtIndex=function(value,index){
    let newNode=new Node(value)
    if(index===0){
        this.prepend(value)
    }  let currentindex=0
    let previousNode=null
        let currentNode=this.head
        while(currentNode && currentindex<index){
            previousNode=currentNode
            currentNode=currentNode.next
            currentindex++
        }
        if(currentindex===index){
        newNode.next=currentNode
        previousNode.next=newNode
        }else{
            throw new Error("out of bound")
        }
}

LinkList.prototype.display=function (){
    let currentNode=this.head
    let value=[]
    while(currentNode){
        value.push(currentNode.value)
        currentNode=currentNode.next
    }
    console.log(value.join("->"))
}
// know value of specific index
LinkList.prototype.findValue=function(index){
    let currentNode=this.head
    let currentIndex=0
    while(currentNode && currentIndex<index){
        currentNode=currentNode.next
        currentIndex++
    }
    if(currentIndex===index){
        console.log( currentNode.value)
    }else{
        throw new Error("not found")
    }
}
//remove from specific index
LinkList.prototype.removeAtIndex = function(index) {
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
  

let l1=new LinkList()
l1.prepend(20)
l1.prepend(30)
l1.prepend(40)
l1.append(50)
l1.insertAtIndex(45,2)
l1.findValue(2)
l1.removeAtIndex(3)
l1.display()
l1.removeAtIndex(2)
l1.display()
