// node creation 

function Node(value){
    this.value = value 
    this.next = null
    this.prev = null
}

function dLinkList(){
    this.head = null
    this.tail = null
    
}
// prepend the value making the first node of dlist

dLinkList.prototype.prepend = function (value){
    var newNode = new Node(value)
    if(!this.head){
        this.head=newNode
        this.tail=newNode
    }else{
    newNode.next=this.head
    this.head=newNode
    this.head.prev=newNode
    }

}
// append the value adding node at last
dLinkList.prototype.append=function(value){
    var newNode=new Node(value)
    if(!this.head){
        this.head=newNode
        this.tail=newNode
    }else{
    newNode.prev=this.tail
    this.tail.next=newNode
    this.tail=newNode
    }
    
}
// insert at any index
dLinkList.prototype.insertAtIndex=function(index,value){
    if (index===0){
        this.prepend(value)
        return
    }
    var newNode=new Node(value)
        var currNode=this.head
        
        var currIndex=0
        while(currNode && currIndex<index){
    
        currNode=currNode.next
        currIndex++
        }
    if(currIndex===index){
        newNode.next=currNode
        newNode.prev=currNode.prev
        if(currNode.prev){
            currNode.prev.next=newNode
        }
        else{this.head=newNode}
        currNode.prev=newNode

    
    }else{
        console.log("out of bond")
    }
}
  


dLinkList.prototype.display=function(){
    let current =this.head
    let values=[]
    while(current){
        values.push(current.value)
        current=current.next
    }
    console.log(values.join("<->"))
}

const list=new dLinkList()
list.prepend(10)
list.prepend(20)
list.append(30)
list.append(40)
list.display()
list.insertAtIndex(1,3)
list.display()