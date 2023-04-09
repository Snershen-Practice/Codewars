//我的解法
//使用 split(' ') 轉為矩陣，並指定空白字元為分隔
//再使用 join('') 轉為字串
function noSpace(x) {
  return x.split(' ').join('');
}

//參考其他人解法
//1:replace 搭配正規表達式
function noSpace(x) {
  return x.replace(/\s/g, '');
}

//2
//直接將空白字元替換掉
function noSpace(x) {
  return x.replaceAll(' ', '');
}
