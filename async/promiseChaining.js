const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Heyy ya step 1 resolved")
    },2000)
})
promise.then((res)=>{
    console.log(res)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve ("step 2 resolved")
        },3000)
    })
}).then((res)=>{
    console.log(res)
})
// this is promise chaning
