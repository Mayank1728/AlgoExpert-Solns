// Given two arrays find the pair with smallest absolute difference
// follow up : Linear Time Comp

/* 
   Test Cases
    1. [12, 7, 14, 1], [10, 8, 3, 15, 6] : [7, 6]
    2. [2, 1, 5, 4, 7], [10, 3, 6, 9, 11] : [4, 4]
*/

// BruteForce Approach
function smallestDiff(arrayOne, arrayTwo) {
  let min = Infinity;
  let pair = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (min > diff) {
        min = diff;
        pair = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  console.log(pair);
  return pair;
  // Time : O(AB) where A and B are lengths of arrays
  // Space : O(1)
}

// Two pointer Approach
function SmallestDiff(arrayOne, arrayTwo) {
  // sort the array
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // two pointer
  let l = 0;
  let r = 0;
  let min = Infinity;
  let pair = [];
  while (l < arrayOne.length && r < arrayTwo.length) {
    let diff = Math.abs(arrayOne[l] - arrayTwo[r]);
    if (diff < min) {
      min = diff;
      pair = [arrayOne[l], arrayTwo[r]];
    }
    if (arrayOne[l] < arrayTwo[r]) l++;
    else if (arrayOne[l] > arrayTwo[r]) r++;
    else break;
  }
  console.log(pair);
  return pair;
  // Time : O(AlogA + BlogB) A & B are len of arrays
  // Space : O(1)
}
smallestDiff([1, 2, 4, 5, 7], [3, 4, 9, 10, 11]);
