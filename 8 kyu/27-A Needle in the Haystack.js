//我的解法
function findNeedle(haystack) {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}

//參考其他人的解法
//1
function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;
  }
}
//2
//更精簡的寫法
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
