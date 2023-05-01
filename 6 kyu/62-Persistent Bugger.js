//我的解法
function persistence(num) {
  if (String(num).length <= 1) {
    return 0;
  } else {
    //紀錄一開始傳入的值
    let recordNum = num;
    //記錄目前數字的長度
    let numLength = String(recordNum).length;
    //記錄執行的次數
    let count = 0;
    console.log(1);
    //判斷 numLength 大於 1 時就執行以下迴圈
    while (numLength > 1) {
      const arr = String(recordNum)
        .split('')
        .map((item) => {
          return Number(item);
        });
      //將相乘後的新結果再次賦予到值
      recordNum = arr.reduce((arr, cur) => {
        return arr * cur;
      });
      //取得新結果的數字長度
      numLength = String(recordNum).length;
      //記錄迴圈執行的次數
      count++;
    }
    return count;
  }
}

//參考其他人解法
//1
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

//2
const persistence = (num) => {
  return `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0;
};

//3
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((t, c) => c * t);
  }
  return i;
}
