//我的解法
function openOrSenior(data) {
  const newData = data.map((item) => {
    return item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open';
  });
  return newData;
}

//參考其他人解法
//1
function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}

//2
function openOrSenior(data) {
  function determineMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
