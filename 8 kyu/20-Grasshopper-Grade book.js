//我的寫法

function getGrade(s1, s2, s3) {
  const grade = [s1, s2, s3];
  //使用陣列方法進行相加
  let gradeAll = grade.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  //不直接除以 3，而是使用陣列長度來算平均
  //即使分數的項目增加，也不會影響運作結果
  let average = gradeAll / grade.length;
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else if (average >= 0 && average < 60) {
    return 'F';
  }
}

// 參考其他人的寫法
// 1
// 流程判斷寫得更為精簡
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return 'F';
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else return 'A';
}

//2
function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length;

  if (average >= 90) return 'A';
  else if (average >= 80) return 'B';
  else if (average >= 70) return 'C';
  else if (average >= 60) return 'D';
  else return 'F';
}

//3
//使用 switch 寫法
function getGrade(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return 'A';
    case avg >= 80:
      return 'B';
    case avg >= 70:
      return 'C';
    case avg >= 60:
      return 'D';
    default:
      return 'F';
  }
}
