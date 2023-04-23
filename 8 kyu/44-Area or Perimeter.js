//我的解法
const areaOrPerimeter = function (l, w) {
  return l === w ? l ** 2 : l * 2 + w * 2;
};

//參考其他人解法
const areaOrPerimeter = (l, w) => (l - w ? (l + w) * 2 : l ** 2);
