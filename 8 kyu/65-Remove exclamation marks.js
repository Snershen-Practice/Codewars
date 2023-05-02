//我的作法
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

//參考其他人作法
//1
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

//2
function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}
