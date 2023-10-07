function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let left=[]
  let right=[]
  let pivot=arr[arr.length-1]
  for(i=0;i<arr.length-1;i++){
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
const arr=[4,2,5,1,9,8]
const result=quickSort(arr)
console.log(result)