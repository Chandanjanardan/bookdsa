let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am resolved")
    },2000)
    setTimeout(()=>{
        reject("I am rejected")
    },2000)
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))