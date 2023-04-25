//我的解法
function sumTwoSmallestNumbers(numbers) {
  const sortResult = numbers.sort((a, b) => {
    return a - b;
  });
  return sortResult[0] + sortResult[1];
}
