//我的作法
function moveZeros(arr) {
  const zeroArr = arr.filter((item) => {
    return item === 0;
  });
  let count = zeroArr.length;
  const newArr = arr.filter((item) => {
    return item !== 0;
  });
  for (let i = 1; i <= zeroArr.length; i++) {
    newArr.push(0);
  }
  return newArr;
}

//參考其他人作法
//1
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

//2
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};

//3
var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};
