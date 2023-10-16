// we can call function and var before initializing it .
hoisted()
a=11

function hoisted(){
    console.log(a)
}
var a=10