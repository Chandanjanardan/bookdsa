// const counter=(num)=>{
//     while(num>=0){
//         console.log(num)
//         num--
//     }
// }
// counter(5)

// recurson

// const counter=(num)=>{
//     console.log(num)
//     if(num===0){
//         return
//     }
//     counter(num-1)
// }
// counter(5)

const arr=[2,3,4,5,6]
const counter=(arr,index)=>{
    if(index===arr.length-1){
        return arr[arr.length-1]
    }

    return arr[index]+counter(arr,index+1)
}

console.log(counter(arr,0))