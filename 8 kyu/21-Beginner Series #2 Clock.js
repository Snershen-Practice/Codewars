//我的寫法
function past(h, m, s) {
  return 60 * 60 * 1000 * h + 60 * 1000 * m + 1000 * s;
}

//參考其他人寫法
//1
//全部轉換成秒，並相加，最後轉換成毫秒
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

//2
function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  return Math.round(setTime - midnight);
}
