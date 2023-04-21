//我的解法
function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  } else if (bmi > 30.0) {
    return 'Obese';
  }
}

//參考其他人解法
//1
function bmi(weight, height) {
  var result = weight / Math.pow(height, 2);
  if (result <= 18.5) {
    return 'Underweight';
  } else if (result <= 25) {
    return 'Normal';
  } else if (result <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

//2
function bmi(weight, height) {
  var formula = weight / Math.pow(height, 2);
  switch (true) {
    case formula <= 18.5:
      return 'Underweight';
    case formula <= 25.0:
      return 'Normal';
    case formula <= 30:
      return 'Overweight';
    default:
      return 'Obese';
  }
}
