//我的作法
function countBy(x, n) {
  let z = [];
  for (let i = x; i <= x * n; i += x) {
    z.push(i);
  }
  return z;
}

//參考其他人作法
//1
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);
