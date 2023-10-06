function maxSum(arr,k){
    if(k>arr.length){
        return `Size exceed`
    }

    // make window
    let currentValue=0
    let maxValue=0

    for (let i=0;i<k;i++){
        currentValue+=arr[i]
    }
    maxValue=currentValue
    // slide 
    for (i=k;i<arr.length;i++){
        currentValue-=arr[i-k]
        currentValue+=arr[i]
    //    maxValue=Math.max(currentValue,maxValue)
    if(currentValue>maxValue){
        maxValue=currentValue
    }
    }
    return maxValue
}




let arr=[9,9,9,1,1,2,4,3]
let k=3

const result=maxSum(arr,k)
console.log(result)