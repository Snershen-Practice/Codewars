//我的解法
const quarterOf = (month) => {
  // Your code here
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
      break;
    case 4:
    case 5:
    case 6:
      return 2;
      break;
    case 7:
    case 8:
    case 9:
      return 3;
      break;
    case 10:
    case 11:
    case 12:
      return 4;
  }
};

//參考其他人解法
//1
const quarterOf = (m) => Math.ceil(m / 3);

//2
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

//3
//使用預設值，就不用判斷 10,11,12月份
const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
};
