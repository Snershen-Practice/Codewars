//我的解法
function sum(numbers) {
  'use strict';
  if (numbers) {
    if (numbers !== []) {
      const total = numbers.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return total;
    } else if ((numbers = [])) {
      return 0;
    }
  }
}

//參考其他人的解法
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
