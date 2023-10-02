
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
    input = prompt("You entered a wrong choice, type Rock, Paper, or Scissors.");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
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
getComputerChoice();
console.log(getComputerChoice());
console.log(getPlayerChoice());