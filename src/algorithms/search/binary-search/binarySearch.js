function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target == arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  // Return -1 if we have not found anything.
  return -1;
}

module.exports = binarySearch;
