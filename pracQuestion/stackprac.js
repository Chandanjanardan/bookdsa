// paranthesis checker
function Stack(str){
    const fbrac=[]
    const rbrack=[]
    const fsquare=[]
    const rsquare=[]
    const fcurly=[]
    const rcurly=[]
    for (let i=0;i<str.length;i++){
        var char=[]
        
        char.push(str[i])
        console.log(char)
        if(char=="("){
                fbrac.push(char)
        }else if (char==")"){
            rbrack.push(char)
        }else if (char=="["){
            fsquare.push(char)
        }
        else if (char=="]"){
            rsquare.push(char)
        }else if (char=="{"){
            fcurly.push(char)
        }
        else if (char =="}")
            rcurly.push(char)
        
    }
    if (rbrack.length===fbrac.length && rsquare.length===fsquare.length && fcurly.length===rcurly.length){
        console.log("Balanced")
    }else{
        console.log("Not balanced")
    }
    // console.log(fbrac,fsquare,fcurly,rbrack,rsquare,rcurly)
    
    
}
// Stack("()")
// Stack("()[]{}")
// Stack("{[]}")
Stack("()]")


