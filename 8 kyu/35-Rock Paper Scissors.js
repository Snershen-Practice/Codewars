//我的解法
const rps = (p1, p2) => {
  let won1 = 'Player 1 won!';
  let won2 = 'Player 2 won!';
  if (p1 === p2) {
    return 'Draw!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return won1;
  } else if (p1 === 'rock' && p2 === 'scissors') {
    return won1;
  } else if (p1 === 'paper' && p2 === 'rock') {
    return won1;
  } else {
    return won2;
  }
};

//參考其他人解法
//1
//使用物件
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

//2
const rps = (p1, p2) => {
  var map = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};
