//我的解法
function isPangram(string) {
  let letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  string
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .split("")
    .forEach((item, index) => {
      if (letterArr.indexOf(item) !== -1) {
        letterArr.splice(letterArr.indexOf(item), 1);
      }
    })

  if (letterArr.length === 0) {
    return true
  } else if (letterArr.length > 0) {
    return false
  }
}

//參考其他人的解法
//1
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

//2
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

//3
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}