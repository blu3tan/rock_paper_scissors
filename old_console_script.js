// global variables

let playerScore = 0;
let computerScore = 0;
let ties = 0;

// generate the random computer choice

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

// generate the player choice (console version)

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

validate the player input to avoid everything other than RPS

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

// play one round of RPS

function playSingleRound () {
    const playerHand = getPlayerChoice();
    const computerHand = getComputerChoice();

    while (playerHand === computerHand) {
        ties += 1;
        return `Tie! you both choose ${playerHand}`;
    }
    if   ((playerHand === "rock" && computerHand === "scissors" ||
         playerHand === "paper" && computerHand === "rock" ||
         playerHand === "scissors" && computerHand === "paper"))
         {
            playerScore += 1;
            return `You won! ${playerHand} beats ${computerHand}`;
         }
    else {
            computerScore += 1;
            return `You loose! ${computerHand} beats ${playerHand}`;
    }
}

// play a game of 5 rounds of RPS

function gameOf5 () {
    playerScore = 0;
    computerScore = 0;
    ties = 0;

    for (let i = 0; i <=4; i++) {
        playSingleRound();
    }
    scoreRegister();
}

// Keep track of scores and print on the console the outcome

function scoreRegister() {
    let winColor = "color:LawnGreen;";
    let looseColor = "color:OrangeRed;";
    let tieColor = "color:DeepSkyBlue;"

    console.log(`${ties} rounds ended in a tie`);
    console.log(`You won ${playerScore} rounds`);
    console.log(`I won ${computerScore} rounds`);

    if (playerScore === computerScore) {
        console.log("%c It was a fair game, we are even.", tieColor);
        console.log("-----------------------------------");
    }
    else if (playerScore > computerScore) {
        console.log("%c You Won the match!? I am speachless...", winColor);
        console.log("-----------------------------------");
    }
    else {
        console.log("%c You Loose the the game! Very predictable outcome...", looseColor);
        console.log("-----------------------------------");
    }
}