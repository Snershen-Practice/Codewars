//我的解法
function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const pattern = /[^a-zA-Z]/g;
  const textArr = text
    .toLowerCase()
    .replace(pattern, '')
    .split('')
    .map((item) => {
      return alphabet.split('').indexOf(item) + 1;
    });
  return textArr.join(' ');
}

//參考其他人解法
//1
let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(' ');

//2
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text
    .toLowerCase()
    .split('')
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(' ');
}
