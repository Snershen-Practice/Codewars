//我的作法
function squareSum(numbers) {
  return numbers.reduce((arr, cur) => {
    return arr + cur ** 2;
  }, 0);
}
//參考其他人作法
function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}
