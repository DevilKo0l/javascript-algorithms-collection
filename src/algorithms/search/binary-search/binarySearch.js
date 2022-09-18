function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // Calculate the index of the middle element.
    let middle = Math.floor((low + high) / 2);

    // Return the position if we have found the element
    if (target == arr[middle]) {
      return middle;
    }

    // Decide which half to choose for seeking next: left or right
    if (target < arr[middle]) {
      // Go to the left half of the array.
      high = middle - 1;
    } else {
      // Go to the right half of the array.
      low = middle + 1;
    }
  }

  // Return -1 if we have not found anything.
  return -1;
}

module.exports = binarySearch;
