//我的解法
function removeChar(str) {
  return str.slice(1, -1);
}

//參考其他人解法
//1
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

//2
function removeChar(str) {
  //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
}
