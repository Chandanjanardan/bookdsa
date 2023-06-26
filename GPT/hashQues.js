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
  