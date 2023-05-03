//我的作法
function bouncingBall(h, bounce, window) {
  if (bounce <= 0 || bounce >= 1 || h <= 0 || window >= h) {
    return -1;
  }

  let count = 0;
  let height = h;

  while (height > window) {
    count++;
    height *= bounce;
    if (height > window) {
      count++;
    }
  }
  return count;
}

//參考其他人作法
//1
function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

//2
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}
