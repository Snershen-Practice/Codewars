//這題和 Convert a Number to a String 蠻像的
//我的解法

function booleanToString(b) {
  return String(b);
}

//參考其他人解法
//1
function booleanToString(b) {
  return b.toString();
}

//2：三元運算子
function booleanToString(b) {
  return b ? 'true' : 'false';
}

//3：樣板字面值，這解法好有趣！
function booleanToString(b) {
  return `${b}`;
}
