//我的解法
function reverseWords(str) {
  let string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  let newString = string
    .split(/[\s\d]/)
    .reverse()
    .join(' ');
  return newString;
}

//參考其他人解法
//1
function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

//2
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
