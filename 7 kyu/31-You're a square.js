//我的解法
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

//參考其他人的解法
//1
//透過餘數來確認是否為整數
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
