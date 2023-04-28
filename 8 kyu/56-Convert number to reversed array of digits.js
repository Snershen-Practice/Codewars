//我的解法
function digitize(n) {
  const arr = String(n)
    .split('')
    .reverse()
    .map((item) => {
      return Number(item);
    });
  return arr;
}
