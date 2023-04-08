//我的解法
//終於嘗試使用三元運算子了！
function evenOrOdd(number) {
  let numResult = number % 2;
  return numResult ? 'Odd' : 'Even';
}

//更精簡寫法
function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

//參考其他人的解法
//1
//這個蠻像我之前會寫的方法
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

//2:箭頭函式 + 三元運算子;
const even_or_odd = (n) => (n % 2 ? 'Odd' : 'Even');
