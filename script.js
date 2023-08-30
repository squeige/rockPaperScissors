// Function to generate a random response Rock, Paper, Scissors.
function getComputerChoice() {
  let min = Math.ceil(0);
  let max = Math.floor(2);
  let random = Math.floor(Math.random() * (max - min + 1));
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Initialize the responses
function choices() {
  let playerSelection = prompt("Rock Paper Scissors??").toLowerCase();
  let computerSelection = getComputerChoice();
  return [playerSelection, computerSelection];
}



// Play a round.
function playRound() {
  let selections = choices();
  console.log("Player chose", selections[0]);
  console.log("Computer chose",selections[1]);
if (selections[0] === selections[1]){
  console.log ("We have a tie!")

} else if (selections[0] === "rock" && selections[1] === "scissors" ||
  selections[0] === "scissors" && selections[1] === "paper" ||
  selections[0] == "paper" && selections[1] === "rock"){
  console.log("Player wins!");

} else {
  console.log("Player looses");
}
}

let playerScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++){
  console.log(`Round ${i + 1};`)
  let roundWinner = playRound();

  if (roundWinner === "player") {
    playerScore++;
  } else if (roundWinner === "computer"){
    computerScore++;
  }
}
console.log("Player's Score:", playerScore);
console.log("Computer's Score:", computerScore);

if (playerScore > computerScore) {
  console.log("Player wins most rounds!");
} else if (computerScore > playerScore) {
  console.log("Computer wins most rounds!");
} else {
  console.log("It's a tie overall!");
}
