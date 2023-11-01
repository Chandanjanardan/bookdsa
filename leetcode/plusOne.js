// add one in array 
function plusOne(arr){
    let lastIndex=arr.length-1
    for(i=0;i<1;i++){
        arr[lastIndex]+=1
    }
    return arr
}

let arr=[1,2,3,4]
const result=plusOne(arr)
console.log(result)