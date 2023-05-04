//我的作法
function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

//參考其他人解法
//1
const setAlarm = (employed, vacation) => employed && !vacation;

//2
function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}
