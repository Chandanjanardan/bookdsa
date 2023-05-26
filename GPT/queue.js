function Queue(){
    this.item=[]
    this.enqueue=enqueue
    this.dequeue=dequeue
    this.peekFront=peekFront
    this.getSize=getSize
    this.display=display
}
// adding enqueue

function enqueue(value){
    this.item.push(value)
}
// dequeue remove from front but i want the value
function dequeue(value){
    if(this.isEmpty){
        console.log("List is empty")
    }
   const firstItem= this.item.shift()
   console.log(`enqueue element is ${firstItem}`)
}
// peek front without removing it 

function peekFront(){
    console.log(this.item[0])
}

// check if queue is empty 
function isEmpty(){
    return this.item.length==0
}
// get the size of the list

function getSize(){
    console.log(`Size of the list is ${this.item.length}`)
}
function display(){
    console.log(this.item)
}
const values= new Queue()
values.enqueue(10)
values.enqueue(20)
values.enqueue(30)
values.display()
values.peekFront()
values.getSize()
// values.dequeue()
// values.display()
