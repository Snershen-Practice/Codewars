//我的作法
function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else if (s.length % 2 !== 0) {
    return s[Math.ceil(s.length / 2 - 1)];
  }
  //Code goes here!
}

//參考其他人作法
//1
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//2
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
