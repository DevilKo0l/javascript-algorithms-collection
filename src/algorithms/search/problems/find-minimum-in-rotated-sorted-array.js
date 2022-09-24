//Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  //if the last element is greater than the first element then there is no rotation.
  //e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
  //Hence the smallest element is first element. A[0]
  if (nums[low] <= nums[high]) {
    return nums[low];
  } else {
    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      //if the mid element is greater than its next element then mid+1 element is the smallest
      //This point would be the point of change. From higher to lower value.
      if (nums[middle] > nums[middle + 1]) {
        return nums[middle + 1];
      }
      //if the mid element is lesser than its previous element then mid element is the smallest
      if (nums[middle] < nums[middle - 1]) {
        return nums[middle];
      }
      //if the mid elements value is greater than the 0th element this means
      //the least value is still somewhere to the right as we are still dealing with elements greater than nums[0]
      if (nums[middle] > nums[low]) {
        low = middle + 1;
        //if nums[0] is greater than the mid value then this means the smallest value is somewhere to the left
      } else {
        high = middle - 1;
      }
    }
  }
};
