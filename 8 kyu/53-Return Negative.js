//我的解法
function makeNegative(num) {
  return num < 0 ? num : 0 - num;
}

//參考其他人解法
function makeNegative(num) {
  return -Math.abs(num);
}
