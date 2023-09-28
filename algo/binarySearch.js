function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1; // Initialize rightIndex to the last index of the array
  
    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
      if (target === arr[middleIndex]) {
        return middleIndex;
      }
  
      if (target < arr[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
    return -1;
  }
  
  console.log(binarySearch([1, 2, 3, 4, 45], 2)); // Output should be 1
  