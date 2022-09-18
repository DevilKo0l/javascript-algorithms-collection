var peakIndexInMountainArray = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle] + 1) {
      return middle;
    }
    if (arr[middle] < arr[middle + 1]) {
      low = middle;
    } else {
      high = middle;
    }
  }
};

let arr;
