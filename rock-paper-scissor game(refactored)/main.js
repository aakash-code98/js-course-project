//* Rock, Paper, Scissors game refactored again. Applied functions.
const init = () => {
  const startGame = confirm("Shall we play Rock, Paper, Scissors?");
  startGame ? playGame() : alert("May be next time.");
};
document.addEventListener("DOMContentLoaded", init);
//play game function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    } else if (!playerChoice) {
      notPlaying();
      break;
    }
    playerChoice = evaluateChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const winner = decideWinner(playerChoice, computerChoice);
    displayWinner(winner);
    if (playAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter Rock, Paper, Scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const notPlaying = () => {
  alert("It seems you changed your mind. Then, see you next time.");
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, scissors.");
};

function evaluateChoice(playerChoice) {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    false;
  }
}

const getComputerChoice = () => {
  rpsArray = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return rpsArray[choice];
};

const decideWinner = (playerChoice, computerChoice) => {
  let result =
    playerChoice === computerChoice
      ? "Tie game!"
      : playerChoice === "rock" && computerChoice === "paper"
      ? `Your move: ${playerChoice}\nComputer's move: ${computerChoice}\n Computer WINS!!`
      : playerChoice === "paper" && computerChoice === "scissors"
      ? `Your move: ${playerChoice}\nComputer's move: ${computerChoice}\n Computer WINS!!`
      : playerChoice === "scissors" && computerChoice === "rock"
      ? `Your move: ${playerChoice}\nComputer's move: ${computerChoice}\n Computer WINS!!`
      : `Your move: ${playerChoice}\nComputer's move: ${computerChoice}\n You WIN!!`;
  return result;
};

const displayWinner = (winner) => {
  alert(winner);
};

const playAgain = () => {
  return confirm("Do you want to play again?");
};

const thanksForPlaying = () => {
  alert("Thank you for playing.");
};
