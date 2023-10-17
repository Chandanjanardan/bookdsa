// let obj={
//     name:"Chandan",
//    get greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// so initially when we want to acces the greet method we have to use ()
// but by seting it to get we can use it as property
// console.log(obj.greet)

// let obj={
//     name:"CHandan"

// }
// function greet(){
//     console.log(`${this.name} hello`)
// }
// // greet.call(obj)
// let greeting=greet.bind(obj)
// greeting()
// this is call and bind


//now get back to setter
let obj={
    name:"Chandan",
   get greet(){
        console.log(`Hello ${this.name}`)
    },
    set greet(value){
        this.name=value
        console.log(`hello ${this.name}`)
    }
}
// I want to chagange greet method
// If i have to change the value from out side we can pass it through setter
obj.greet='Kittu'

