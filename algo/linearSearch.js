// function linearSearch(arr,t){
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]==t){
//             return i
//         }if(!arr.includes(t)){
//             return `${t} is not present in array `
//         }
//     }
// }
// console.log(linearSearch([2,4,1,6],3))

let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  

for (let i=0;i<people.length;i++){
    if(people[i].age>25){
        console.log(people[i].name)
    }
}