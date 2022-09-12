// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }
// OR

function hasTargetSum(array, target) {
    const seenNumbers = {}
    for (const number of array) {
      const complement = target - number;
      if (complement in seenNumbers) return true;
      seenNumbers[number] = true;
    }
    return false;
}

/* 
runtime: 0(n^2)
space: 0(n)

OR
runtime: 0(n)
space: 0(n+1)


/* 
  hasTargetSum ([22, 19, 4, 6, 30], 25)
  iterate through each number in the array
    for the current number, identify a completement that adds to the target (complement = target - number)
    iterate through the rest of the array
      check if any number of the complement
      if so, return true

    if I reach end of the array without complement found, return false

OR

  create an object to keep track of numbers we have already seen
  iterate through each number in the array
    for the current number, identify the complement whose sum will equal the target
    check if any key on our object is the complement
      if so return true
      otherwise, add that number to the object
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
