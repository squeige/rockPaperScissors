function getComputerChoice() {
  // Randomly return Rock Paper or Scissors
  let min = Math.ceil(0);
  let max = Math.floor(2);
  let random = (Math.floor(Math.random() * (max-min+1)));
  if (random == 0) {
    return computerSelection = "rock";
  } else if (random == 1) {
    return computerSelection = "paper";
  } else (random == 2)
    return computerSelection = "scissors";
}

function playround(){
let playerSelection = prompt("Rock Paper Scissors??");
let computerSelection = getComputerChoice();
console.log("Computer choose " + computerSelection)

if ( computerSelection === playerSelection ){
console.log ("its a tie!!!")
return;

} else if (computerSelection === "rock" && playerSelection === "scissors"){
  console.log ("Rock beats scissors");
}
else if (computerSelection === "rock" && playerSelection === "paper"){
  console.log ("Paper beats rock");
  return;

} else if (computerSelection === "paper" && playerSelection === "scissors"){
  console.log ("Scissors beat paper");
  return;
}
else if (computerSelection === "scissors" && playerSelection === "paper"){
  console.log ("Scissors beats paper");
  return;
}
else if (computerSelection === "scissors" && playerSelection === "rock"){
  console.log ("Rock beats scissors");
  return;
}
return
}
playround()
