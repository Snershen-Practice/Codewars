//我的解法
function hero(bullets, dragons) {
  if (bullets >= 0 && dragons >= 0) {
    if (bullets < dragons * 2) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

//參考其他人解法
//1
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

//2
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}
