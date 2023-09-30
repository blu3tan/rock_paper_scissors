
// let computerChoice = ["rock", "paper", "scissors"];

// function getComputerChoice () {
// 	console.log(computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
// }
// getComputerChoice()

let randomChoice = Math.floor (Math.random() * (3))

function getComputerChoice () {
    let choice;
    if (randomChoice === 0) {
        choice = "rock";
        return choice;
    }
    else if (randomChoice === 1) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissors"
        return choice;
    }
}
    console.log(getComputerChoice())