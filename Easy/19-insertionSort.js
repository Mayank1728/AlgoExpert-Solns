function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    let j;
    for (j = i - 1; j > -1; j--) {
      if (array[j] > num) array[j + 1] = array[j];
      else break;
    }
    array[j + 1] = num;
  }
  return array;
  // Time : O(N^2)
  // Space : O(1)
}
