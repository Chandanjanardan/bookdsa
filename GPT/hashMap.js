function hashMap(){
    this.size=0
    this.buckets=[];
}
// hasg function to generate hash code


hashMap.prototype.hash= function(key){
    let hash=0;
    for (let i=0;i<key.length  ;i++){
        hash+=key.charCodeAt(i)
    }
    return hash % this.buckets.length
}

// check if key is exist in map 
hashMap.prototype.has = function(key){
    const index = this.hash(key);
    if (!this.buckets[index]){
        return console.log("not fountin bucket",false)
    }
    for (let i=0;i<this.buckets[index].length ;i++){
        if (this.buckets[i][0]===key){
            return true
        }
    }
    return false
}
// adding add 

const myMap = new hashMap()
// console.log(typeof(hashMap))
// console.log(typeof(myMap))
// console.log(myMap)
myMap.buckets=new Array(10)
// adding key value pair 
myMap.buckets[2]=[["apple",5],["banana",10]]
console.log(myMap.buckets)

console.log(myMap.has("banana"))


