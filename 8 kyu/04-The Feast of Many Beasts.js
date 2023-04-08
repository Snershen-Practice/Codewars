//我的解法
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

//參考其他人寫法
//1
//透過 slice(-1) 取得最後一個值
function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

//2
//startsWith 會驗證該字串的起始是否與特定字串相符
//endsWith 會驗證字串結尾是否與特定字串相符
function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}

//小插曲
//以為要自己驗證字串，所以一開始連驗證字串格式都寫進去了，因此學了不少字串的操作方式

//後來想想其實還有好幾個地方沒有驗證到：
//1.如果出現沒有傳入任何字串的情況
//2.未消除字串的短槓
//3.字串中不得出現特殊字元
//4.嗯好多情況，先這樣吧

//發現審題的重要性，其實就是在訓練定義問題的能力

function feast(beast, dish) {
  let beastLowerCase = beast.toLowerCase().split(' ').join('');
  let dishLowerCase = dish.toLowerCase().split(' ').join('');
  if (beastLowerCase.length >= 2 && dishLowerCase.length >= 2) {
    const beastArr = beastLowerCase.split('');
    const dishArr = dishLowerCase.split('');
    if (beastArr[0] === dishArr[0] && beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//先將錯就錯，看看上面還有沒有更精簡的寫法
// 1.字串其實可以直接查找索引
// 2.流程判斷改為比較運算子直接輸出 boolean 值
function feast(beast, dish) {
  let newBeast = beast.toLowerCase().split(' ').join('');
  let newDish = dish.toLowerCase().split(' ').join('');
  if (newBeast.length >= 2 && newDish.length >= 2) {
    newBeast[0] === newDish[0] && newBeast[newBeast.length - 1] === newDish[newDish.length - 1];
  } else {
    return false;
  }
}
