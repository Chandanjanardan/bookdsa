    var containsNearbyDuplicate = function(nums, k) {
        var duplicate=[]
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]==k){
                duplicate.push(nums[i])
            }
        }
    return duplicate.length>1?true:false

    }
    let nums=[1,0,1,1]
    const result=containsNearbyDuplicate(nums,1)
    console.log(result)