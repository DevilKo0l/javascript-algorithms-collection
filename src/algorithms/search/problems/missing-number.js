var missingNumber = function (nums) {
  let sortedNums = nums.sort();
  let low = 0;
  let high = nums.length;
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (sortedNums[mid] > mid) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
