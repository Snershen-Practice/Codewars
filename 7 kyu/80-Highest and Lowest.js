//我的作法
function highAndLow(numbers) {
  const numArr = numbers.split(' ').map((item) => {
    return Number(item);
  });
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

//參考其他人作法
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
