// Apply selection sort

function selectionSort(array) {
  // Selection sort
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    // Swapping current Element with smallest elemement
    [array[minIdx], array[i]] = [array[i], array[minIdx]];
  }
  return array;
  // Time : O(N^2)
  // Space : O(1)
}
