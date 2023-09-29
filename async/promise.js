
// const promise=new Promise((resolve,reject)=>{
//     // resolve("Yehhh boy")
//     reject("shit boy")
// })
// promise.then(data=>(
//     console.log(data)
// ))
// .catch(data=>(
//     console.log(data)
// ))


// -------------multiple .then

const promise=new Promise((resolve,reject)=>{
    resolve({user:"Chandy"})
})
promise.then((data)=>{
    return {...data,age:21}
}).then((user)=>{
    console.log(user)
})