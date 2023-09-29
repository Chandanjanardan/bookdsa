console.log("Programm start")
const promise=new Promise((resolve,reject)=>{
    // console.log("Promise is pending")
    setTimeout(()=>{
        resolve("promise is completed")
    },2000)
})
promise.then((res)=>(

    console.log(res,promise)
    
))
console.log(promise)