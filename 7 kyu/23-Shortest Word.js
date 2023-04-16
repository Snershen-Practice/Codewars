//我的解法
//透過 sort 陣列方法，依照字串長度由小到大排列，並回傳一個新陣列
//取得第一個（也就是長度最短的值）長度，並回傳
function findShort(s) {
  const stringArr = s.split(' ');
  const sortArr = stringArr.sort((a, b) => {
    return a.length - b.length;
  });
  return sortArr[0].length;
}

//參考其他人解法
//1
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length)
  );
}

//2
function findShort(s) {
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

//3
const findShort = (s) =>
  s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length;

//4
function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}
