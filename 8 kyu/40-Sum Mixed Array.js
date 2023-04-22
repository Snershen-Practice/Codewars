//我的解法
function sumMix(x) {
  const total = x.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
  return total;
}

//參考其他人解法
//1
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
//2
const sumMix = (x) => x.reduce((a, b) => +b + a, 0);

//3
const sumMix = (x) => x.reduce((pre, val) => pre + +val, 0);
