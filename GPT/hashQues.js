function findFirstNonRepeatedChar(str) {
    const charCount = {};
    
    // Count the occurrences of each character
    for (let char of str) {
      if (charCount.hasOwnProperty(char)) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    
    // Find the first non-repeated character
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    
    return null; // No non-repeated character found
  }
  
  const input = "abacabad";
  const result = findFirstNonRepeatedChar(input);
  console.log(result); // Output: "c"







  function twoSum(nums, target) {
  const numMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    
    numMap[nums[i]] = i;
  }
  
  return null; // No two numbers add up to the target sum
}

const input = [2, 7, 11, 15];
const target = 9;
const result = twoSum(input, target);
console.log(result); // Output: [0, 1]

  