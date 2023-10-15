let people={
    name:"Chandan",
    id:2
}
// const obj=Object.entries(people)

// console.log(obj[0][1])
const arrayOfObj=Object.entries(people)
console.log(arrayOfObj)
arrayOfObj.map(([key,value])=>({
    key:key,
    value:value
}))