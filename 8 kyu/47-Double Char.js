//我的解法
function doubleChar(str) {
  return str
    .split('')
    .map((item) => {
      return item + item;
    })
    .join('');
}

//參考其他人解法
//1
function doubleChar(str) {
  return str.replace(/(.)/g, '$1$1');
}

//2
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}
