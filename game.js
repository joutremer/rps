// ----- Game state -----
let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

// ----- DOM elements -----
const userChoiceP = document.querySelector(".user-side p");
const computerChoiceP = document.querySelector(".computer-side p");
const outcomeP = document.querySelector(".outcome p");
const userScoreDiv = document.querySelector(".user-score");
const computerScoreDiv = document.querySelector(".computer-score");
const resultsDiv = document.querySelector(".results");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// ----- Helpers -----
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPrompt() {
  // 0 = Rock, 1 = Paper, 2 = Scissors
  return getRandomInt(3);
}

function choiceToText(choice) {
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  return "Scissors";
}

// ----- Main game logic -----
function playRound(userChoice) {
  const computerChoice = computerPrompt();
  let outcome;

  // Win conditions
  const userWins =
    (userChoice === 0 && computerChoice === 2) ||
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1);

  const computerWins =
    (userChoice === 0 && computerChoice === 1) ||
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 0);

  if (userWins) {
    userScore++;
    outcome = "You win!";
  } else if (computerWins) {
    computerScore++;
    outcome = "You lose!";
  } else {
    outcome = "It's a tie!";
  }

  roundNumber++;

  // Update current round UI (replace text, not append)
  userChoiceP.textContent = choiceToText(userChoice);
  computerChoiceP.textContent = choiceToText(computerChoice);
  outcomeP.textContent = outcome;

  userScoreDiv.textContent = `User Score: ${userScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

  // Append to results history
  const logLine = document.createElement("p");
  logLine.textContent = `Round ${roundNumber}: You chose ${choiceToText(
    userChoice
  )}, computer chose ${choiceToText(computerChoice)} → ${outcome}`;
  resultsDiv.appendChild(logLine);
}

// ----- Event listeners -----
// IMPORTANT: pass a function, not playRound(0) directly
rockButton.addEventListener("click", () => playRound(0));
paperButton.addEventListener("click", () => playRound(1));
scissorsButton.addEventListener("click", () => playRound(2));

// Optional: initialize score text on load
userScoreDiv.textContent = "User Score: 0";
computerScoreDiv.textContent = "Computer Score: 0";
outcomeP.textContent = "";
userChoiceP.textContent = "";
computerChoiceP.textContent = "";
