function startGame() {
  var startBet = Number(document.forms["luckySevens"]["startBet"].value);
  if (startBet <= 0) {
    alert("Error: starting bet must be greater than zero.");
    document.forms["luckySevens"]["startBet"].value = "";
    document.forms["luckySevens"]["startBet"].focus();
    return false;
  }
  var winningArray = [startBet];
  var rollCounter = 0;
  for (var totalMoney = startBet; totalMoney >= 1; rollCounter++) {
    diceOne = Math.floor(Math.random() * 6) + 1;    
    diceTwo = Math.floor(Math.random() * 6) + 1;
    if (Number(diceOne + diceTwo) == 7) {
      totalMoney += 4;
      winningArray[winningArray.length] = totalMoney;
    } else {
      totalMoney -= 1;
      winningArray[winningArray.length] = totalMoney;
    }
  }
  var maxWin = 0;
  for (var i = 0; i < winningArray.length; i++) {
    if (winningArray[i] > maxWin) {
      maxWin = winningArray[i];
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerText = ("$" + startBet.toFixed(2));
  document.getElementById("lastRoll").innerText = rollCounter;
  document.getElementById("maxMoney").innerText = ("$" + maxWin.toFixed(2));
  document.getElementById("highRollCount").innerText = winningArray.indexOf(maxWin);
  document.getElementById("submitButton").innerText = "Play Again";
  document.forms["luckySevens"]["startBet"].focus();
  return false;
}