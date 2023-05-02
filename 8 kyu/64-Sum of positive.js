//我的作法
function positiveSum(arr) {
  if (arr.length) {
    const total = arr.filter((item) => {
      if (item > 0) {
        return item > 0;
      }
    });
    if (total.length) {
      return total.reduce((arr, cur) => {
        return arr + cur;
      });
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

//參考其他人做法
//1
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}

//2
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

//3
function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
