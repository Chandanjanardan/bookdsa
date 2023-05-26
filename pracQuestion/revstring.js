// reverse the string using stack

function Stack(str){
    const fvalue=[]
    let rvalue=""

    for (let i of str){
        fvalue.push(i)
        // const rvalue=fvalue.pop()
    }
    console.log(fvalue.join("").toString())

    while(fvalue.length>0){
        rvalue+=fvalue.pop()
    }
    console.log( rvalue)
   
    
}

Stack("hello world")

