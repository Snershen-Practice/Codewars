//我的作法
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}

//參考其他人作法
//1
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
//2
function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}
