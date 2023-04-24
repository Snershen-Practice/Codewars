//我的解法
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//參考其他人解法
function minMax(arr) {
  var a = arr.sort(function (a, b) {
    return a - b;
  });
  return [a[0], a[a.length - 1]];
}
