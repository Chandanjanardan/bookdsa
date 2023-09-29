
const promise=new Promise((resolve,reject)=>{
    // resolve("Yehhh boy")
    reject("shit boy")
})
promise.then(data=>(
    console.log(data)
))
.catch(data=>(
    console.log(data)
))
