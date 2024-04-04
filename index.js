function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, iterate through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
        // Check if the sum of the current pair of numbers equals the target
        if (array[i] + array[j] === target) {
            // If a pair is found that adds up to the target, return true
            return true;
        }
    }
}
// If no pair is found that adds up to the target, return false
return false;

}

/* 
  O(n*2)*O(1)=O(n*2)
*/

/* 
  initialize the array
  iterate through the array
    check for pair sum
  return result
*/

/*
  1. Nested Loops: The function uses two nested for loops to iterate through each pair of numbers in the array.
  The outer loop (i) iterates through each element in the array, while the inner loop (j) starts from the next 
  element (i + 1) and goes through the rest of the array. This setup ensures that every possible pair of numbers is checked.
  2. Sum Check: Inside the inner loop, the function checks if the sum of the current pair of numbers (array[i] + array[j]) 
  equals the target number. If such a pair is found, the function immediately returns true, indicating that there is at least 
  one pair of numbers in the array that adds up to the target.
  3. Return Value: If the function completes its iterations without finding any pair that adds up to the target, it returns false. 
  This indicates that no such pair exists in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 15));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 110));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 18));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
