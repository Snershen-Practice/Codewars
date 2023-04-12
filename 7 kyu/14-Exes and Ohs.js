//我的解法
//1. 將字串轉為矩陣
//2. 透過 filter 篩選出含有 o,O 以及 x,X 的矩陣
//3. 最終比較兩者的陣列長度是否相同
function XO(str) {
  //code here
  const strArr = str.split('');
  const circleArr = strArr.filter((item) => {
    return item === 'o' || item === 'O';
  });

  const crossArr = strArr.filter((item) => {
    return item === 'x' || item === 'X';
  });

  if (circleArr.length === crossArr.length) {
    return true;
  } else {
    return false;
  }
}

//參考其他人寫法
//1
//直接將字串統一轉為小寫，就可以把判斷寫得短一點
const XO = (str) => {
  str = str.toLowerCase().split('');
  return str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length;
};

//2
//透過一個計數器，當計數器為 0 時，代表兩者數量相同，回傳 true
function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'x') sum++;
    if (str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}
