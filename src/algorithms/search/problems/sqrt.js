var mySqrt = function (x) {
  let low = 1;
  let high = x;

  if (x < 2) {
    return x;
  }
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let temp = x / mid;
    //Check if x = mid * mid
    if (temp == mid) {
      return mid;
    }
    // Check if x < mid * mid or x > mid * mid
    if (temp < mid) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low - 1;
};

console.log("hi");
