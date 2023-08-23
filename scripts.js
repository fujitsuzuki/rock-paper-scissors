"user strict";
//get computer choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    const options = [];
    options.push('rock', 'paper', 'scissors');
    return options[index];
}

//get user choice
function getUserChoice() {
    const choice = prompt();
    if (validateUserChoice(choice)) {
        return choice.toLowerCase();
    } else {
        getUserChoice();
    }
}

function validateUserChoice(userChoice) {
    return isRock(userChoice) || isPaper(userChoice) || isScrissors(userChoice);
}

function isRock(userChoice) {
    return userChoice.toLowerCase() === 'rock';
}

function isPaper(userChoice) {
    return userChoice.toLowerCase() === 'paper';
}

function isScrissors(userChoice) {
    return userChoice.toLowerCase() === 'scissors';
}

//asses result
function playRound(computerSelection, userSelection) {
    //paper vs scissors
    if (computerSelection === 'paper' && userSelection === 'scissors') {
        return 'user';
    }
    //paper vs rock
    if (computerSelection === 'paper' && userSelection === 'rock') {
        return 'computer';
    }
    //scissors vs rock
    if (computerSelection === 'scissors' && userSelection === 'rock') {
        return 'user';
    }
    //scissors vs paper
    if (computerSelection === 'scissors' && userSelection === 'paper') {
        return 'computer';
    }
    //rock vs paper
    if (computerSelection === 'rock' && userSelection === 'paper') {
        return 'user';
    }
    //rock vs scissors
    if (computerSelection === 'rock' && userSelection === 'scissors') {
        return 'computer';
    }
    //draw scenario
    if (computerSelection === userSelection) {
        return 'draw';
    }
}

//GAME ON

//store scoring
let userScore = 0;
let computerScore = 0;
//count games
let gameCount = 0;

let keepGoing = true;
while (keepGoing) {
    //play round
    gameCount++;
    //get choices
    let computer = getComputerChoice();
    let user = getUserChoice();
    //get result
    let result = playRound(computer, user);
    //check results and append scores
    if (result === 'user') {
        userScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    //finish condition
    if (gameCount === 5) {
        keepGoing = false;
        if (userScore > computerScore) {
            alert('User won!');
        } else {
            alert('Computer won!');
        }
    }
}