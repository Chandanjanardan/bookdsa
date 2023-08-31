// promise 


function doSomething(){
    return new Promise((resolve,reject)=>{
        // resolve("promise is resolved")
        reject('promsie is reject')
    })
}
// doSomething().then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })
doSomething().then((data)=>{
    console.log(data)
}).catch((err)=>{
console.log(err)
})