//我的解法
function boolToWord(bool) {
  if (bool) {
    return 'Yes';
  } else if (!bool) {
    return 'No';
  }
}

//以前的解法
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else if (bool === false) {
    return 'No';
  }
}

//參考其他人的解法
//寫法 1：三元運算子
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

//寫法 2：物件取值
function boolToWord(bool) {
  let a = {
    true: 'Yes',
    false: 'No',
  };
  return a[bool];
}
