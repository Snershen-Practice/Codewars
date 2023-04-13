//我的解法
function friend(friends) {
  const myfriend = friends.filter((item) => {
    return item.length === 4;
  });
  return myfriend;
}

//更精簡的寫法
//箭頭函式會有 return
function friend(friends) {
  return friends.filter((item) => item.length === 4);
}

//參考其他人寫法
//1
function friend(friends) {
  let outArr = [];

  friends.forEach((item) => {
    if (item.length == 4) {
      outArr.push(item);
    }
  });
  return outArr;
}
