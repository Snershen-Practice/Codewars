//我的解法
//任意兩邊的和大於第三邊
//任意兩邊的差小於第三邊
function isTriangle(a, b, c) {
  let side = 0;
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && b + c > a && a + c > b) {
      if (a - b < c && b - c < a && a - c < b) {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//參考其他人解法
//1
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

//2
var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

//3
function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  return a + b > c;
}
