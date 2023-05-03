//我的作法
function enough(cap, on, wait) {
  if (cap >= on + wait) {
    return 0;
  } else if (cap < on + wait) {
    return on + wait - cap;
  }
}

//參考其他人作法
//1
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

//2
function enough(cap, on, wait) {
  return on + wait > cap ? on + wait - cap : 0;
}
