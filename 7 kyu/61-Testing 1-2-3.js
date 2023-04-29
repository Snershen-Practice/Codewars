//我的解法
var number = function (array) {
  const arr = array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
  return arr;
};

//參考其他人解法
function number(arr) {
  return arr.map((e, i) => `${++i}: ${e}`);
}
