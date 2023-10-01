// async function ke andar jo bhai hai wo promise return karta hai
// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hello")
//         },2000)
//     })
// }
// const data= getData()
// // console.log(data)
// data.then((res)=>console.log(res))
const promise=new Promise((resolve,reject)=>{
           setTimeout(()=>{
               resolve("Hello is resolved")
           },2000)})
async function getData(){
    const data=await promise
    console.log(data)
}
getData()