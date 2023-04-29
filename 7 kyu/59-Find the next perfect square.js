//我的解法
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  } else {
    return -1;
  }
}

//參考其他人解法
//1
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

//2
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if (Math.round(number) === number) {
    return Math.pow(++number, 2);
  }
  return -1;
}
