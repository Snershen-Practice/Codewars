//我的解法
//使用 switch
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
  }
}

//改善：加入 break 和 default
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      console.log('Error');
      break;
  }
}

//參考其他人的解法
//1 透過物件取值
const updateLight = (current) => {
  return {
    red: 'green',
    yellow: 'red',
    green: 'yellow',
  }[current];
};

//2
function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }
}
