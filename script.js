// array metod, not used bcs not already part of the course

/*  let computerChoice = ["rock", "paper", "scissors"];

 function getComputerChoice () {
 	console.log(computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
 }
 getComputerChoice() */



// generate computer choice using if statement

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