// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7

// Output: 4
function search(arr,target){
    let i=0
    while(arr[i]<target){
       i++
    }
    
return i

    
}
let nums = [1,3,5,6]
const result=search(nums,2)
console.log(result)
 