
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
let running = false;

// text variables declaration
const introText = [`We meet again, at last.\nChoose your weapon wisely…`, 
`It's A Me, Odin\ni challeng you...`, `Shall we Play a game?\nI can smell your fear...`];

const playerWins = [`Is that even possible?`, `Great, kid. Don’t get cocky`, `I have a bad feeling about this`, `I've made some very poor decisions`, `You have failed me for the last time`];

const computerWins = [`Don’t be sorry, be better`, `You shouldn't have come back`, `YOU DIED`, `You know, sometimes I amaze even myself`, `Checkmate`];

const computerEndText = [`"More human than human"\nis my motto`, `Praise the sun!\nI shall defeat you once more`, 
`I find your lack of skill disturbing\nThis was too easy`];

const playerEndText = [`I'll Be Back\nReset and i'll show you`, `Daisy, daisy...\nreset me if you dare`, 
`The cake is a lie\nI seek revenge!`];

const winEmoji = ['ヽ(´▽`)/', 'ᕙ(⇀‸↼‶)ᕗ', '(•̀ᴗ•́)و ̑̑', '(͠≖ ͜ʖ͠≖)', '(⌐■_■)', '٩(^‿^)۶', '┌(ㆆ㉨ㆆ)ʃ'];
const looseEmoji = ['(╯°□°）╯', '(`･ω･´)', 'ლ(ಠ益ಠლ)', '٩(๏_๏)۶', 't(-_-t)', '(҂◡_◡)', '(ಥ﹏ಥ)'];

// get player selection by buttons

rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    playSingleRound();
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
        setTimeout (() => { faces.textContent = ('{•̃_•̃}'); }, 2000);
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
        return bottomText.textContent = (`Never tell me the odds!\nthis is a tie by ${playerHand}`);
    }
    if   ((playerHand === "rock" && computerHand === "scissors" ||
         playerHand === "paper" && computerHand === "rock" ||
         playerHand === "scissors" && computerHand === "paper"))
         {
            playerScore += 1;
            leftScore.textContent = (`${playerScore}`);
            return bottomText.textContent = (`Is that even possible?\nyour ${playerHand} beats my ${computerHand}`);
         }
    else {
            computerScore += 1;
            rightScore.textContent = (`${computerScore}`);
            return bottomText.textContent = (`Don’t be sorry, be better\nmy ${computerHand} beats your ${playerHand}`);
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