// practice link list a

// node 
function Node (value){
    this.value= value
    this.next= null
}

function LinkList(){
    this.head= null
    this.tail= null
    this.print=print
}
LinkList.prototype.append=function(value){
    let newNode = new Node(value)
    if(!this.head){
        this.tail=newNode
        this.head=newNode
    }else{
        newNode.next=this.head
        this.head=newNode
    }
    
}

const print=function(){
    let currNode=this.head
    
    let value=[]
    while(currNode !==null){
        value.push(currNode.value)
        currNode=currNode.next
    }
    console.log(value.join("->"))
}

const list = new LinkList()

list.append(10)
list.append(20)
list.print()
console.log(typeof(list))