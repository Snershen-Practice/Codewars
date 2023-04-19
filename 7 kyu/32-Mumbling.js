//我的解法
//1.把所有文字都轉為小寫，並轉為陣列
//2.準備一個 newString，去承接每個 item 跑完等同於自己索引位置的迴圈後拼回來的字串
//3.每次拼回來的 newString，都放入到 newArr
//4.再將 newArr 跑陣列方法，將首字都轉為大寫
//5.透過 join() 將陣列轉為字串
function accum(s) {
  let stringArr = s.toLowerCase().split('');
  let newArr = [];
  stringArr.forEach((item, index) => {
    let newString = '';
    for (let i = 0; i < index + 1; i++) {
      newString += item;
    }
    newArr.push(newString);
  });

  const capitalArr = newArr.map((item) => {
    return item.replace(item[0], item[0].toUpperCase());
  });

  return capitalArr.join('-');
}

//參考其他人解法
//1
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

//2
function accum(s) {
  return s
    .split('')
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join('-');
}
