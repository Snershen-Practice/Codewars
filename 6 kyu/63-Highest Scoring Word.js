//我的解法
function high(x) {
  //生成 abc.. 26個字母的矩陣
  let alpha = [...Array(26).keys()].map((i) => String.fromCharCode(i + 65).toLowerCase());
  //記錄每個單字的索引加總
  const totalRecord = [];
  const xArr = x.split(' ');
  xArr.forEach((group) => {
    //計算每個字母的索引值
    const num = group.split('').map((single) => {
      return alpha.indexOf(single) + 1;
    });
    //計算每個單字的索引加總
    const total = num.reduce((arr, cur) => {
      return arr + cur;
    });
    totalRecord.push({ text: group, total: total });
  });
  //由大到小排序
  const sortResult = totalRecord.sort((a, b) => {
    return b.total - a.total;
  });
  return sortResult[0].text;
}

//參考其他人解法
function high(s) {
  let as = s.split(' ').map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
//2
function high(x) {
  return x.split(' ').reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  });
}

function score(word) {
  return word.split('').reduce((accum, current) => {
    return accum + (current.charCodeAt() - 96);
  }, 0);
}
