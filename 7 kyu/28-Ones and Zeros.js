//我的解法
const binaryArrayToNumber = (arr) => {
  let total = 0;
  arr.forEach((item, index) => {
    if (item === 0) {
      total += 0;
    } else if (item > 0) {
      total += 2 ** ((arr.length - 1 - index) * item);
    }
  });
  return total;
};

//參考其他人解法
//1
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

//2
function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

//3
const binaryArrayToNumber = (arr) => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
};
