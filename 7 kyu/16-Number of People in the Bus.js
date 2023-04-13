//我的解法
//算出每站車上剩下的人數，最終計算出總值
var number = function (busStops) {
  let passenger = 0;
  busStops.forEach((item) => {
    if (item[0] >= 0 && item[1] >= 0) {
      passenger += item[0] - item[1];
    }
  });
  return passenger;
};

//參考其他人的解法
//1
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

//2
var number = function (busStops) {
  return busStops.map((x) => x[0] - x[1]).reduce((x, y) => x + y);
};
