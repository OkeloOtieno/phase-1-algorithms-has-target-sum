function hasTargetSum(array, target) {
  const numMap = {};

  // Iterate through the array to fill the hash map
  for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      // Check if the complement exists in the hash map and is not the current number
      if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
        return true;
      }
      // Add the current number and its index to the hash map
      numMap[array[i]] = i;
  }

  // If no pair is found that adds up to the target, return false
  return false;

}

/* 
  O(n)
*/

/* 
  initialize the hashmap
  iterate through the array
   check if complement exists in hash map and is not the current number
   add the current number and its index to the hash map
    check for pair sum
  If no pair is found that adds up to the target, return false
*/

/*
  1. Hash Map Initialization: A hash map is created to store each number from the array as a key and its index as the value. This allows for constant time (O(1)) lookups to check if a complement (the target minus the current number) exists in the map.
  2. Iterating Through the Array: The function iterates through each number in the array. For each number, it calculates the complement by subtracting the current number from the target.
  3. Checking for the Complement: It then checks if the complement exists in the hash map. If it does, it means there is a pair of numbers (the current number and its complement) that adds up to the target. In this case, the function returns true.
  4. Updating the Hash Map: If the complement does not exist in the hash map, the current number and its index are added to the hash map. This step prepares the map for the next iteration.
  5. No Solution Found: If the function iterates through the entire array without finding a pair that adds up to the target, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Test case 1: Array with a pair that adds up to the target
  const array1 = [3, 6, 4, 8, 7];
  const target1 = 10;
  console.log(`Expect true: ${hasTargetSum(array1, target1)}`); 
  
  // Test case 2: Array without any pair that adds up to the target
  const array2 = [1, 2, 3, 4, 5];
  const target2 = 10;
  console.log(`Expect false: ${hasTargetSum(array2, target2)}`); 
  
  // Test case 3: Array with multiple pairs that add up to the target
  const array3 = [1, 2, 3, 4, 5, 6];
  const target3 = 7;
  console.log(`Expect true: ${hasTargetSum(array3, target3)}`); 
  
  // Test case 4: Array with a single element equal to the target
  const array4 = [10];
  const target4 = 10;
  console.log(`Expect false: ${hasTargetSum(array4, target4)}`);
  
  // Test case 5: Empty array
  const array5 = [];
  const target5 = 10;
  console.log(`Expect false: ${hasTargetSum(array5, target5)}`); 
}

module.exports = hasTargetSum;
