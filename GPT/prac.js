// Binary search 
let arr=[3,3,4,5,6,7]
function search(arr,target){
    
    let i=0
    while(arr[i]<arr.length-1){
        if(target==arr[i]){
            console.log(i)
            i++
            
        }
    }
    return -1
}
search(arr,4)
