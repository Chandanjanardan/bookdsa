// promise have 3 state
// pending fullfilled and reject

const myReceipt = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        console.log("Here is your icecreame")
        resolve("here is your ice creame resolved")
    },2000)
})
// console.log(myReceipt)
// to extract resolve and reject msg we need . then and .catch
myReceipt.then((resolveVaue)=>{
    console.log(resolveVaue)
})