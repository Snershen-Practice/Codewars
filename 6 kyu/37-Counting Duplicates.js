//我的解法
function duplicateCount(text) {
  const textArr = text.toLowerCase().split('');
  const total_count = textArr.reduce((obj, item) => {
    if (item in obj) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
  let repeatArr = [];
  for (let text in total_count) {
    if (total_count[text] > 1) {
      repeatArr.push(text);
    }
  }
  return repeatArr.length;
}

//參考其他人解法
//1
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}

//2
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
