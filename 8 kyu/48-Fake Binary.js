//我的解法
function fakeBin(x) {
  return x
    .split('')
    .map((item) => {
      return item >= 5 ? '1' : '0';
    })
    .join('');
}

//參考其他人寫法
//1
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

//2
function fakeBin(x) {
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}
