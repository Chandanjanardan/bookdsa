let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from promise")
    },5000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from promise p2")
    },6000)
})
async function handlePromise(){
    const val2=await p2
    console.log(val2)
    const val= await p1
    console.log(val)
}
handlePromise()