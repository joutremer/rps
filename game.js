// start game- print welcome to rock paper scissors
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let roundNumber;
let draw = 0;
let humanSelection;
let computerSelection;
let keepPlaying = true;

function startGame(){
    console.log("Welcome to Rock, Paper, Scissors!  Let's Play!");
}

// prompt the user for their choice
function validateUserInput(number){
     if (userChoice != 0 && userChoice != 1 && userChoice != 2){
        console.log("Invalid Input: You must enter 1, 2 or 3");
        promptUser();
    }
    else{
        return true;
    }
}

function promptUser(){
     userChoice = prompt("Rock(0), Paper(1), or Scissors(2) ????");
     validateUserInput(userChoice);

    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//create computers choice

function computerPrompt(){
    computerSelection = getRandomInt(3);
}

//evalaute winner, print output, and current score

function determineWinner(user, computer){
    if (user == 0 && computer == 2 || user == 1 && computer == 0 || user == 2 && computer == 1){
        userScore += 1;
        console.log("You win!");
        return;
    }
    else if (user == 0 && computer == 1 || user == 1 && computer == 2 || user == 2 && computer == 0){
        computerScore += 1;
        console.log("You lose!")
        return;
    }

    else{
        draw += 1;
        console.log("There was a tie!");
        return;
    }
}

//ask if they want to play again, if yes then continue, if no then end

function keepPlay(){
    let answer =  prompt("Do you want to keep playing? y or n");
    if (answer == "y"){
        keepPlaying = true;
    }
    else{
        keepPlaying = false;
    }
}

startGame();

while (keepPlaying == true){
    promptUser();
    computerPrompt();
    determineWinner(userChoice, computerSelection);
    keepPlay();
}
