// remove value give from an array
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
let nums=[3,2,2,3]

// var remove=(nums,val)=>{
//     return nums.filter((el)=>el!==val)
// }
//  console.log(remove(nums,3))

var remove=(nums,val)=>{
    let j=0
    for (let i=0;i<nums.length;i++){
        if(num[i]!==val){
            nums[j++]=nums[i]
        }
    }
    return j
}