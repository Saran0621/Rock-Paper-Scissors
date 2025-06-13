let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const outcome = userChoice + computerChoice;

  if (userChoice === computerChoice) {
    resultDiv.innerText = `It's a draw! Both chose ${userChoice}.`;
  } else if (
    outcome === "rockscissors" ||
    outcome === "paperrock" ||
    outcome === "scissorspaper"
  ) {
    userScore++;
    userScoreSpan.innerText = userScore;
    resultDiv.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    resultDiv.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}
