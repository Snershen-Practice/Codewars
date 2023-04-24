//我的解法
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

//參考其他人解法
//1
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
