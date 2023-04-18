let playGame = confirm("Shall we play Rock, Paper, Scissors");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter Rock, Paper or Scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
          : playerOne === "paper" && computer === "scissors"
          ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
          : playerOne === "scissors" && computer === "rock"
          ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
          : `Your move: ${playerOne}\nComputer's move: ${computer}\n You WIN!!`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("ok, Thanks for playing.");
    }
  } else {
    alert("OK. Maybe next time.");
  }
} else {
  alert("May be next time");
}
