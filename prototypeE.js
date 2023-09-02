// add a fucntion boop in string prototype

String.prototype.boop=()=>{
    console.log("boop")
}
// String.prototype.boop()
// lat call boop on all string

const cat="mewo"
// cat.boop()

// console.log(Object.getOwnPropertyNames(cat.__proto__))




// ---------------------------------------------------
// Logout all the protoperties within th object

console.log(Object.getOwnPropertyNames(Object))
console.log(Object.getOwnPropertyNames(Object.prototype))