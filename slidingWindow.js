function maxSumSubarray(arr, k) {
    if (k > arr.length) {
      return "Window size exceeds array length.";
    }
  
    let maxSum = 0;
    let currentSum = 0;
  
    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
  
    maxSum = currentSum;
  
    // Slide the window and update the sums
    for (let i = k; i < arr.length; i++) {
      // Subtract the element that is no longer part of the window
      currentSum -= arr[i - k];
      // Add the new element that is included in the window
      currentSum += arr[i];
      // Update maxSum if the currentSum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  const arr = [2, 1, 5, 1, 3, 2];
  const k = 3;
  const result = maxSumSubarray(arr, k);
  console.log("Maximum sum of subarray of size", k, "is:", result);
  