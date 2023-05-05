//我的作法
function squareDigits(num) {
  const result = num
    .toString()
    .split('')
    .map((item) => item ** 2)
    .join('');
  return Number(result);
}
//參考其他人作法
function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('');
}
