//我的作法
var summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

//參考其他人作法
//1
const summation = (n) => (n * (n + 1)) / 2;

//2
var summation = function f(num) {
  return num ? num + f(num - 1) : 0;
};
