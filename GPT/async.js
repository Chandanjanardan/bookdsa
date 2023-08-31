// promise 


const doSomething=()=>{
    return new Promise((resolve,reject)=>{
        resolve("promise is resolved")
    })
}
doSomething().then((data)=>{
    console.log(data)
})