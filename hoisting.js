// we can call function and var before initializing it .
// hoisted()
// a=11

// function hoisted(){
//     console.log(a)
// }
// var a=10

// function example() {
//     console.log(a);
//     var a = 5;
// }
// example();

function example() {
    var a = 10;
    function a() {}
    console.log(a);
  }
  example();
  