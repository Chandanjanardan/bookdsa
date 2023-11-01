// leet code conatin most water
let arr=[1,8,6,2,5,4,8,3,7]

function mostWater(arr){
    let maxSum=0
   let arr2=[...arr]
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr2.length;j++){
        let curr=arr[i]*arr2[j]
        if(curr>maxSum){
            maxSum=curr
        }
    }
   }
   return maxSum
}
const result=mostWater(arr)
console.log(result)