//我的解法
function abbrevName(name) {
  const arr = [];
  name.split(' ').forEach((item) => {
    arr.push(item[0].toUpperCase());
  });
  return arr.join('.');
}

//參考其他人解法
//1
const abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();

//2
function abbrevName(name) {
  return name
    .split(' ')
    .map((x) => x.substr(0, 1).toUpperCase())
    .join('.');
}
