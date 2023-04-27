//我的解法
function grow(x) {
  return x.reduce((acc, cur) => {
    return acc * cur;
  });
}
