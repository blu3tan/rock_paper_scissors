// array metod, not used bcs not already part of the course

/*  let computerChoice = ["rock", "paper", "scissors"];

 function getComputerChoice () {
 	console.log(computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
 }
 getComputerChoice() */



// generate computer choice using if statement

let randomNum = Math.floor (Math.random() * (3))

function getComputerChoice () {
    let choice;
    if (randomNum === 0) {
        choice = "rock";
        return choice;
        
    }
    else if (randomNum === 1) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissors"
        return choice;
    }
}

let computerChoice = getComputerChoice()
console.log (computerChoice);


    // generate computer choice using switch statement

    /* let randomChoice = Math.floor (Math.random() * (3))

    function getComputerChoice() {
        let choice;

    switch (randomChoice) {
        case 0:
            choice = "rock";
            return choice;
            break;
        case 1:
            choice = "paper";
            return choice;
            break;
        case 2:
            choice = "scissors";
            return choice;
            break;
    }
}

console.log(getComputerChoice())
 */

// get player choice

let playerChoice = prompt ("Make your choice");
    playerChoice = playerChoice.toLowerCase();
let result;

// compare player and computer choice to see if are equal

playerChoice === computerChoice
? console.log("Draw! Try again")
: playRound();



function playRound () {

    switch (playerChoice) {
        case "rock":
            computerChoice === "paper"
            ? console.log("You lose! Paper beats Rock")
            : console.log("You Win! Rock beats Scissors");
            break;
        
        case "paper":
            computerChoice === "rock"
            ? console.log("You Win! Paper beats Rock")
            : console.log("You Lose! Scissors beats Paper");
            break;
            
        case "scissors":
            computerChoice === "rock"
            ? console.log("You Lose! Rock beats Scissors")
            : console.log("You Win! Scissors beats Paper");
            break; 
    }
}