//我的解法
function solution(string) {
  let newString = string.split('').map((item) => {
    if (/[A-Z]/.test(item)) {
      return item.replace(item, ' ' + item.toUpperCase());
    } else {
      return item;
    }
  });
  return newString.join('');
}

//參考其他人解法
//1
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

//2
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  return string.join('');
}
