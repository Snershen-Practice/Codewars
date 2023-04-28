//我的解法
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//參考其他人解法
const goals = (...a) => a.reduce((s, v) => s + v, 0);
