//我的作法
function howMuchILoveYou(nbPetals) {
  // your code
  const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  if (nbPetals % phrase.length !== 0) {
    return phrase[(nbPetals % phrase.length) - 1];
  } else {
    return phrase[(nbPetals % phrase.length) + phrase.length - 1];
  }
}

//參考其他人作法
//1
const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

//2
function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly',
  };
  return phrase[nbPetals % 6];
}
