//我的解法
function otherAngle(a, b) {
  return 180 - (a + b);
}

//參考其他人解法
function otherAngle(a, b) {
  return 180 - (a | 0) - (b | 0);
}
