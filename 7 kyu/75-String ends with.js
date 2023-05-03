//我的作法
function solution(str, ending) {
  return str.endsWith(ending);
}

//參考其他人解法
//1
function solution(str, ending) {
  if (typeof str != 'string' || typeof ending != 'string') throw 'wrong type';
  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}
//2
function solution(str, ending) {
  return str.substr(-ending.length) == ending;
}
