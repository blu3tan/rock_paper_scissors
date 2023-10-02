
// get player choice

/* let playerChoice = prompt ("Make your choice between rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase(); */


/* checkPlayerChoice()

// check if playerchoice is null and trasform to lowercase

function checkPlayerChoice () {
    if (playerChoice === "" || playerChoice === null) {
        alert ("You have to choose one...");
        window.location.reload();
    }
    else {
        playerChoice = playerChoice.toLowerCase();
    }
} */


/* let computerScore = 0;
let playerScore = 0;
playRound(); */

// compare player and computer choice to see if are equal

/* playerChoice === computerChoice
? console.log("Draw! Try again")
: playRound(); */


/* function playRound () {

    switch (playerChoice) {
        case "rock":
            return== "paper"
            ? console.log("You lose! Paper beats Rock")
            : console.log("You Win! Rock beats Scissors");
        
        case "paper":
            return== "rock"
            ? console.log("You Win! Paper beats Rock")
            : console.log("You Lose! Scissors beats Paper");
            
        case "scissors":
            return== "rock"
            ? console.log("You Lose! Rock beats Scissors")
            : console.log("You Win! Scissors beats Paper");
    }
} */

// get player choice

/* let playerChoice = prompt ("Make your choice between rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();

// compare player and computer choice to see if are equal

playerChoice === computerChoice
? console.log("Draw! Try again")
: playRound();


    switch (playerChoice) {

        case "rock":
            if (return== "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore = computerScore + 1;  
            }
            else {
                console.log("You Win! Rock beats Scissors");
                playerScore = playerScore + 1;
            }

        case "paper":
            if (return== "rock") {
                console.log("You Win! Paper beats Rock");
                playerScore = playerScore + 1;  
            }
            else {
                console.log("You Lose! Scissors beats Paper");
                computerScore = computerScore + 1;
            }
            
        case "scissors":
            if (return== "rock") {
                console.log("You Lose! Rock beats Scissors");
                computerScore = computerScore + 1;  
            }
            else {
                console.log("You Win! Scissors beats Paper");
                playerScore = playerScore + 1;
            }
    }
}


console.log(computerScore);
console.log(playerScore); */

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// generate the computer choice

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
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function validateInput(choice) {
    return choices.includes(choice);
}

// Play one single round of the game

function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    console.log(computerChoice);
    console.log(playerChoice);
}

// play an entire game and keep score

function game() {
    playRound();
}

playRound();
