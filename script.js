
// define new logic with buttons

const rockBtn = document.querySelector('#rock_button-2');
const paperBtn = document.querySelector('#paper_button-2');
const scissorsBtn = document.querySelector('#scissors_button-2');
const resetBtn = document.querySelector('#reset_button-2');
const ledLight = document.querySelector('#led-2')

const leftText = document.querySelector('#left');
const rightText = document.querySelector('#right');
const leftScore = document.querySelector('#leftScore');
const rightScore = document.querySelector('#rightScore');
const faces = document.querySelector('#faces');
const bottomText = document.querySelector('#bottomText');

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerChoice;
let power = false;
const running = false;

// get player selection by buttons

rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    
});
paperBtn.addEventListener('click', () => {
    playerChoice = 'paper';
    
});
scissorsBtn.addEventListener('click', () => {
    playerChoice = 'scissors';
    
});
resetBtn.addEventListener('click', (e) => {
    ledLight.classList.remove('ledLight');
    if (!power && !running) {
        setTimeout (() => { bottomText.textContent = ('BEGIN'); }, 1500);
        setTimeout (() => { faces.textContent = ('ლ(｀ー´ლ)'); }, 2000);
        setTimeout (() => { leftText.setAttribute('style','visibility: visible;'); 
        rightText.setAttribute('style','visibility: visible;'); } , 2200);
        setTimeout (() => { leftScore.setAttribute('style','visibility: visible;');
        rightScore.setAttribute('style','visibility: visible;'); } , 2500);
        leftScore.textContent = (`${playerScore}`);
        rightScore.textContent = (`${computerScore}`);
        power = true;
        running = true;
    }
    else if (power || running) {
        bottomText.textContent = ('RESET2');
        console.log(e);
    }
    
});

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

// play one round of RPS

function playSingleRound () {
    const playerHand = playerChoice;
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