// Constructor fuction is used to create objects.


function Person(){
    this.name="john ",
    this.age=23,
    this.greet=()=>{
        console.log(`hello ${this.name}`)
    }
}

// create an object 
const person1 = new Person()
const person2= new Person()
// console.log(person1.name) otu: John

// we can pass aragument in constructor function also 

// const person3= new Person("John","123")

// adding new property to object 
person1.subject="english"
console.log(person1)

// so insted of adding to individual obj if we want to add new property or method in constructor fun
// use prototype
Person.prototype.game="cricket"
console.log(person1)