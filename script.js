
const rockBtn = document.querySelector('#rock_button-2');
const paperBtn = document.querySelector('#paper_button-2');
const scissorsBtn = document.querySelector('#scissors_button-2');
const resetBtn = document.querySelector('#reset_button-2');
const ledLight = document.querySelector('#led-2')
const blu3Link = document.getElementById('blu3_link-2');

const leftText = document.querySelector('#left');
const rightText = document.querySelector('#right');
const leftScore = document.querySelector('#leftScore');
const rightScore = document.querySelector('#rightScore');
const faces = document.querySelector('#faces');
const bottomText = document.querySelector('#bottomText');

let buttonSound = () => new Audio('./sound/click.mp3').play();
let winSound = () => new Audio('./sound/win.mp3').play();
let looseSound = () => new Audio('./sound/loose.mp3').play();
let powerSound = () => new Audio('./sound/power.mp3').play();
let endLoose = () => new Audio('./sound/endloose.mp3').play();
let endWin = () => new Audio('./sound/endwin.mp3').play();

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerChoice ='';
let power = false;
let running = false;

// text variables declaration
const introText = [`Play again, I dare you.\nI double dare you!`, `You seem a decent fellow.\nI hate to kill you.`, `We meet again, at last.\nChoose your weapon wisely…`, 
`It's A Me, Odin\nI challenge you...`, `Shall we Play a game?\nI can smell your fear...`];

const tieGame = [`Inconceivable!`, `Anybody want a peanut?`, `Try not. Do, or do not.`, `Alrighty then!`, `I can't believe this!`, `You must be cheating!`, `I find your luck disgusting`, `I’ll have what you're having`]

const playerWins = [`I want you to feel you're doing well`, `This is fine...`, `Is that even possible?`, `Great, kid. Don’t get cocky`, `I have a bad feeling about this`, `I've made some very poor decisions`, `You have failed me for the last time`, `He's on fire!`, `I am error...`, `How high can you get?`];

const computerWins = [`It’s all in the reflexes`, `Why so serious?`, `Don’t be sorry, be better`, `You shouldn't have come back`, `YOU DIED`, `Sometimes I amaze even myself`, `Checkmate`, `Waka Waka Waka!`, `Press 'F' to pay respects`, `Flawless Victory!`, `It’s super effective!`];

const computerEndText = [`"I WIN"\n"More human than human"`, `I AM VICTORIOUS!\nPraise the sun!`, 
`VICTORY FOR ME\nThis was too easy`, `I WIN!\nLEEEEEROY JENKINSSS`];

const playerEndText = [`YOU ARE THE WINNER\nNever argue with the data.`, `YOU WON\nI see dead people.`, `YOU WON THIS TIME\nI'll Be Back`, `YOU KILLED ME\nDaisy, daisy...`, 
`YOU WIN THIS TIME\nThe cake is a lie`];

const winEmoji = ['ヽ(´▽`)/', 'ᕙ(⇀‸↼‶)ᕗ', '(•̀ᴗ•́)و ̑̑', '( ˘ ³˘)', '(⌐■_■)', '٩(^‿^)۶', '┌(ㆆ㉨ㆆ)ʃ'];
const looseEmoji = ['(╯°□°）╯', '(`･ω･´)', 'ლ(ಠ益ಠლ)', '٩(๏_๏)۶', 't(-_-t)', '(҂◡_◡)', '(ಥ﹏ಥ)'];

// get player selection with buttons

blu3Link.addEventListener('click', () => {
    document.getElementById('credits').style.visibility = 'visible';
    setTimeout (() => {document.getElementById('credits').style.visibility = 'hidden';} , 3000);
});

rockBtn.addEventListener('click', () => {
    buttonSound();
    playerChoice = 'rock';
    playSingleRound();
    checkWinner();
});
paperBtn.addEventListener('click', () => {
    buttonSound();
    playerChoice = 'paper';
    playSingleRound(); 
    checkWinner(); 
});
scissorsBtn.addEventListener('click', () => {
    buttonSound();
    playerChoice = 'scissors';
    playSingleRound();
    checkWinner();  
});

resetBtn.addEventListener('click', (e) => {
    buttonSound();
    ledLight.classList.remove('ledLight');
    if (!power && !running) {
        setTimeout (() => {powerSound();}, 300);
        setTimeout (() => { bottomText.textContent = (randomWord(introText)); }, 2500);
        setTimeout (() => { faces.textContent = ('{•̃_•̃}'); }, 2000);
        setTimeout (() => { leftText.setAttribute('style','visibility: visible;'); 
        rightText.setAttribute('style','visibility: visible;'); } , 3200);
        setTimeout (() => { leftScore.setAttribute('style','visibility: visible;');
        rightScore.setAttribute('style','visibility: visible;'); } , 3200);
        leftScore.textContent = (`${playerScore}`);
        rightScore.textContent = (`${computerScore}`);
        rockBtn.classList.remove('clickBlock');
        paperBtn.classList.remove('clickBlock');
        scissorsBtn.classList.remove('clickBlock');
        blu3Link.classList.remove('clickBlock');
        power = true;
        running = true;
    }
    else if (power || running) {
        buttonSound();
        playerScore = 0;
        computerScore = 0;
        bottomText.textContent = (' \n ')
        faces.textContent = ('')
        leftScore.textContent = (`${playerScore}`);
        rightScore.textContent = (`${computerScore}`);
        setTimeout (() => { faces.textContent = ('{•̃_•̃}'); }, 1000);
        setTimeout (() => { bottomText.textContent = (randomWord(introText)); }, 1500);
        rockBtn.classList.remove('clickBlock');
        paperBtn.classList.remove('clickBlock');
        scissorsBtn.classList.remove('clickBlock');

    }
    
});

// generate the random computer choice

function getComputerChoice() {
    let randomChoice = Math.floor (Math.random() * (3))
    switch (randomChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        }
}

// play one round of RPS

function playSingleRound () {
    const playerHand = playerChoice;
    const computerHand = getComputerChoice();

    while (playerHand === computerHand) {
        ties += 1;
        faces.textContent = ('(Ծ‸ Ծ)')
        return bottomText.textContent = (`${randomWord(tieGame)}
We are stuck in a tie of ${playerHand}`);
    }
    if   ((playerHand === "rock" && computerHand === "scissors" ||
         playerHand === "paper" && computerHand === "rock" ||
         playerHand === "scissors" && computerHand === "paper"))
         {
            setTimeout (() => {winSound();}, 300);
            playerScore += 1;
            leftScore.textContent = (`${playerScore}`);
            faces.textContent = (randomWord(looseEmoji));
            return bottomText.textContent = (`${randomWord(playerWins)}
Your ${playerHand} beats my ${computerHand}`);
         }
    else {
            setTimeout (() => {looseSound();}, 300);
            computerScore += 1;
            rightScore.textContent = (`${computerScore}`);
            faces.textContent = (randomWord(winEmoji));
            return bottomText.textContent = (`${randomWord(computerWins)}
My ${computerHand} beats your ${playerHand}`);
    }
}

function randomWord (array) {
    const randomPick = Math.floor (Math.random() * (array.length));
    console.log(randomPick);
    return array[randomPick];
}

function checkWinner () {
    if (playerScore === 5) {
        setTimeout (() => {endWin();}, 800);
        faces.textContent = ('▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓');
        setTimeout (() => {faces.textContent = ('(╥﹏╥)');}, 1000);
        rockBtn.classList.add('clickBlock');
        paperBtn.classList.add('clickBlock');
        scissorsBtn.classList.add('clickBlock');
        return bottomText.textContent = (randomWord(playerEndText));
    }
    else if (computerScore === 5) {
        setTimeout (() => {endLoose();}, 800);
        faces.textContent = ('▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓');
        setTimeout (() => {faces.textContent = ('(⌐■_■)');}, 1000);
        rockBtn.classList.add('clickBlock');
        paperBtn.classList.add('clickBlock');
        scissorsBtn.classList.add('clickBlock');
        return bottomText.textContent = (randomWord(computerEndText));
    }
}


