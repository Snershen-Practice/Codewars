//我的解法
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const sortArr = args.sort((a,b)=>{
      return a - b;
    })
    return sortArr[0];
  }
}

//參考其他人解法
//1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}