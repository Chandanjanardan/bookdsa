// const counter=(num)=>{
//     while(num>=0){
//         console.log(num)
//         num--
//     }
// }
// counter(5)

// recurson

const counter=(num)=>{
    console.log(num)
    if(num===0){
        return
    }
    counter(num-1)
}
counter(5)