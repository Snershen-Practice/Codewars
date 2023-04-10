//我的寫法
function countPositivesSumNegatives(input) {
  let positiveNum = 0;
  let negativeNum = 0;
  if (input) {
    input.forEach((item) => {
      if (item > 0) {
        positiveNum++;
      } else if (item < 0) {
        negativeNum += item;
      }
    });
    if (positiveNum === 0 && negativeNum === 0) {
      return [];
    } else {
      return [positiveNum, negativeNum];
    }
  } else if (input === []) {
    return [];
  } else {
    return [];
  }
}

//檢討
//應該要先判斷陣列是否為空值或空陣列，再進入到判斷中

function countPositivesSumNegatives(input) {
  //特別的是這段判斷如果倒過來寫
  //變成 if (input.length === 0 || input === null )
  //就會出現 null 無法使用 .length 錯誤
  if (input === null || input.length === 0) {
    return [];
  }
  let positiveNum = 0;
  let negativeNum = 0;
  input.forEach((item) => {
    if (item > 0) {
      positiveNum++;
    } else if (item < 0) {
      negativeNum += item;
    }
  });
  return [positiveNum, negativeNum];
}

//參考其他人解法
//1
//三元運算子會將前面的 condition 回傳為一個布林值
//如果只有 && 並不會回傳布林值
//filter 方法回傳一個陣列，裡面是符合篩選條件的內容
//透過 reduce ，並指定初始值為 0，將前後值相加
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [input.filter((p) => p > 0).length, input.filter((n) => n < 0).reduce((a, b) => a + b, 0)]
    : [];
}

//2
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}
