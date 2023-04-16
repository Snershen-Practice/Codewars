//我的解法
function oddOrEven(array) {
  const sum = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  if (sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

//參考其他人的解法
//1
//寫法更精簡
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

//2
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
