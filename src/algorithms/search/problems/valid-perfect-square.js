var isPerfectSquare = function (num) {
  let low = 0;
  let high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if num == mid * mid, return true
    if (mid * mid == num) {
      return true;
    }

    // Decide which half to choose for seeking next: left or right
    if (mid * mid > num) {
      // Go to the left half of the array
      high = mid - 1;
    } else {
      // Go to the right half of the array
      low = mid + 1;
    }
  }
  // If it can not find, out the loop and return false
  return false;
};
