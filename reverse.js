let arr=[9,8,7,6,5,4,3,2,1]
console.log(arr)

let left=0
let right=arr.length-1

function reverse(arr){
  // while(left<=right)
  for (let i=0;i<(Math.floor(arr.length/2));i++)
  {
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
    left++
    right--
  }
  return arr
}
const result=reverse(arr)
console.log(result)