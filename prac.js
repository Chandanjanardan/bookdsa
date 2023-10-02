function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let last=arr.length-1
    let pivot=arr[last]
    let left=[]
    let right =[]
    for (let i=0;i<last;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    left=quickSort(left)
    right=quickSort(right)
    return [...left,pivot,...right]
}
let arr=[-6,20,8-2,4]
console.log(quickSort(arr))