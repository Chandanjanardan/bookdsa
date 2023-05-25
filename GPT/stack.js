// stack uses first in first out
function Stack(){
    this.item=[]
    this.push=push
    this.pop=pop
    this.peek=peek
    this.display=display
}
// push 
function push(value){
    this.item.push(value)
}
// pop
function pop(){
    this.item.pop()
}
// return last element of stack
Stack.prototype.peeklast=function(){
    console.log(this.item[this.item.length-1])
}
// peek see what is at that index
function peek(index){
    console.log( this.item[index])
}
Stack.prototype.clear=function (){
    this.item=[]
}

// display the stack
function display(){
    console.log(this.item)
}
const list= new Stack()
list.push(10)
list.push(12)
list.display()
list.clear()
// list.peek(0)
// list.pop()
list.display()
list.peeklast()