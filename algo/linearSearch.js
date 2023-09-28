function linearSearch(arr,t){
    for (let i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i
        }if(!arr.includes(t)){
            return `${t} is not present in array `
        }
    }
}
console.log(linearSearch([2,4,1,6],3))