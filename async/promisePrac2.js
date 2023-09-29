console.log("promise started")
const promise = new Promise((resolve,reject)=>{
    
   
    setTimeout(()=>{
        reject("I am rejected")
        setTimeout(()=>{
            resolve("I am resolved")
        },3000)
    },2000)
})

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
console.log(err)})

console.log(promise)

