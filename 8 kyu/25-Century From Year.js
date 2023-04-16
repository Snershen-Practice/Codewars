//我的解法
function century(year) {
  if (year < 100) {
    return 1;
  } else if (year >= 100) {
    const century = year / 100;
    return Math.ceil(century);
  }
}

//參考其他人寫法
//更加精簡
//1
const century = (year) => Math.ceil(year / 100);

//2
const century = (year) => (year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1);

//3
function century(year) {
  var century = 0;

  for (var i = 0; i < year; i++) {
    if (i % 100 == 0) {
      century++;
    }
  }
  return century;
}
