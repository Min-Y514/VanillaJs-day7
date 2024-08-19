const rangeNumber = document.getElementById("range-number");
const selectNumber = document.getElementById("select-number");
const playBtn = document.getElementById("play-btn");

function DetermineNegativeNumber(number) {
  if (number < 0) {
    return 0;
  } else {
    return number;
  }
}

function addTags(playerNumber, randomNumber, resultText) {
  const result1 = document.getElementById("result1");
  result1.innerText = `You chose:${playerNumber}, the machine chose: ${randomNumber}`;
  const result2 = document.getElementById("result2");
  result2.innerText = `You ${resultText}!`;
}

function startingGame() {
  event.preventDefault();
  const endNumber = DetermineNegativeNumber(rangeNumber.value);

  const playerNumber = DetermineNegativeNumber(selectNumber.value);

  const randomNumber = Math.floor(Math.random() * endNumber);

  if (playerNumber == randomNumber) {
    addTags(playerNumber, randomNumber, "won");
  } else {
    addTags(playerNumber, randomNumber, "lost");
  }
}

playBtn.addEventListener("click", startingGame);
