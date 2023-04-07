//我的解法
function testEven(n) {
  let remainder = n % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

//參考其他人的解法
//寫法 1：透過邏比較運算子，輸出 boolean 值
function testEven(n) {
  return n % 2 === 0;
}

//寫法 2：三元運算子
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

//寫法 3：透過邏輯運算子中的反向運算子轉換成布林值
//注意 `||` 和 `&&` 回傳的結果不是 boolean 值
function testEven(n) {
  return !(n % 2);
}
