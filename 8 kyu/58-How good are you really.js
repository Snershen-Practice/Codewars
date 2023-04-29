//我的解法
function betterThanAverage(classPoints, yourPoints) {
  const total = classPoints.reduce((acc, cur) => {
    return acc + cur;
  });
  const avg = total / classPoints.length;
  if (avg <= yourPoints) {
    return true;
  } else {
    return false;
  }
}

//參考其他人解法
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
