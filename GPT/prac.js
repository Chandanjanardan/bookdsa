// node creation 
function Node(value){
    this.value=value
    this.next=null
}
// Linklist makeing 

function Linklist(){
    this.head=null
}

// append
Linklist.prototype.prepend=function(value){
    var newNode= new Node(value)
    newNode.next=this.head
    this.head=newNode
}
Linklist.prototype.append=function(value){
    var newNode=new Node(value)
    if(!this.head){
        this.head=newNode
    }else{
    var currNode=this.head
        while((currNode.next)){
            currNode=currNode.next
        }
        currNode.next=newNode
    }
}

Linklist.prototype.display=function(){
    var currNode=this.head
    var list=[]
    while(currNode){
        list.push(currNode.value)
        currNode=currNode.next
    }
    console.log(list.join("->"))
}

const num=new Linklist()
num.append(10)
num.append(20)
num.display()
num.append(30)
num.append(40)
num.display()