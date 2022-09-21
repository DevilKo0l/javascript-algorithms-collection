var nextGreatestLetter = function (letters, target) {
  let low = 0;
  let high = letters.length - 1;
  if (letters[low] > target || letters[high] <= target) {
    return letters[low];
  }
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (letters[mid] > target) {
      high = mid - 1;
    }

    if (letters[mid] <= target) {
      low = mid + 1;
    }
  }
  return letters[low];
};
