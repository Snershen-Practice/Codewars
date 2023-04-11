//我的寫法
//複習 map, split, replace, slice, join 綜合應用
//使用字串轉為矩陣的技巧以處理句子中的每個單字
//額外收穫：因為一開始系統預設的第一行 String.prototype.toJadenCase 看不懂，所以趁這個機會好好了解原型鍊的概念

String.prototype.toJadenCase = function () {
  if (this) {
    const arr = this.split(' ');
    const newArr = arr.map((item) => {
      return item.replace(item.slice(0, 1), item.slice(0, 1).toUpperCase());
    });
    const newString = newArr.join(' ');
    return newString;
  }
};

//參考其他人寫法
//1
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

//2
//slice(1)會取得首字母以外的字串
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};
