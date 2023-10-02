
function getComputerChoice() {
    let randomChoice = Math.floor (Math.random() * (3))
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        }
}

// generate the player choice

function getPlayerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  let check = validateInput(input);
  while (check == false) {
    input = prompt("You entered a wrong choice, type Rock, Paper, or Scissors.");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    check = validateInput(input);
  }
  return input;
}

function validateInput(choice) {
    if ((choice === "rock" ||
         choice === "paper" ||
         choice === "scissors")) {
            return true;
         }
    else {
        return false;
    }
}

function playSingleRound (playerHand, computerHand) {
    while (playerHand === computerHand) {
        return `Tie! you both choose ${playerHand}`;
    }
    if   ((playerHand === "rock" && computerHand === "scissors" ||
         playerHand === "paper" && computerHand === "rock" ||
         playerHand === "scissors" && computerHand === "paper"))
         {
            return `You won! ${playerHand} beats ${computerHand}`;
         }
    else {
            return `You loose! ${computerHand} beats ${playerHand}`;
    }
}
