//我的解法‘
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  vowels.forEach((vowel) => {
    str = str.replaceAll(vowel, '');
  });
  return str;
}

//參考其他人解法
//1
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//2
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//3
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join('');
}
