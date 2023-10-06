const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 35 },
    { name: "Eve", age: 28 }
  ];

  function bubbleSort(arr){
    let swapped
    do{
        swapped=false
        for (let i=0;i<arr.length-1;i++){
            if(arr[i].age>arr[i+1].age){
            let temp=arr[i].age
            arr[i].age=arr[i+1].age
            arr[i+1].age=temp
            swapped=true
        }}
    }while(swapped)
    arr.map(e=>console.log(e.name))

  }
bubbleSort(people)