//我的解法

function areYouPlayingBanjo(name) {
  let lowerName = name.toLowerCase();
  return lowerName[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

//參考其他人解法
//1
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + ' banjo';
}

//2
function areYouPlayingBanjo(name) {
  if (name[0] == 'R' || name[0] == 'r') return name + ' plays banjo';
  else return name + ' does not play banjo';
}
