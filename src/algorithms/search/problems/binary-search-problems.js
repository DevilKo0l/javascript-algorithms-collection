//Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  if (nums[low] <= nums[high]) {
    return nums[low];
  } else {
    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      if (nums[middle] > nums[middle + 1]) {
        return nums[middle + 1];
      }
      if (nums[middle] < nums[middle - 1]) {
        return nums[middle];
      }
      if (nums[middle] > nums[low]) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
  }
};
