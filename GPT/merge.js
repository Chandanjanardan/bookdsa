function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge( mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sorted=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
const arr=[4,2,5,1,9,5]
const result=mergeSort(arr)
console.log(result)