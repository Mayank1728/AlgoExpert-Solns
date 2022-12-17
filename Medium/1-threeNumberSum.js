// find combination of 3 numbers summing
// to a given target from the array

/* 
   Test Cases
    1. [2, 5, 1, 8, 3, 4, 7], 12 : [[1, 3, 8], [1, 4, 7], [2, 3, 7], [3, 4, 5]]
    2. [-2, 3, 1, 9, -6, 5, -8, 2], 8 : [[-6, 5, 9], [-2, 1, 9], [1, 2, 5]]
*/

function threeSum(array, target) {
  array.sort((a, b) => a - b);
  console.log(array);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let newTarget = target - array[i];
    let start = i + 1;
    let end = array.length - 1;
    while (start < end) {
      let sum = array[start] + array[end];
      if (sum === newTarget) {
        result.push([array[i], array[start], array[end]]);
        start++;
        end--;
      } else if (sum < newTarget) {
        start++;
      } else {
        end--;
      }
    }
  }
  console.log(result);
  // Time : O(N^2)
  // Space : O(N)
}
threeSum([2, 5, 1, 8, 3, 4, 7], 12);
threeSum([-2, 3, 1, 9, -6, 5, -8, 2], 8);
