//我的解法
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let x = dadYearsOld - 2 * sonYearsOld;
  if (dadYearsOld > 0 && dadYearsOld > 0) {
    if (x < 0) {
      return -x;
    } else {
      return x;
    }
  } else {
    return 'error';
  }
}

//參考其他人解法
//1
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//2
function twiceAsOld(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}
