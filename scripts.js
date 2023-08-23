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
    const choice = 'scrissors';
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
    return userChoice.toLowerCase() === 'scrissors';
}

//asses result
function playRound(computerSelection, userSelection) {
    //paper vs scissors
    if (computerSelection === 'paper' && userSelection === 'scissors') {
        return 'computer';
    }
    //paper vs rock
    if (computerSelection === 'paper' && userSelection === 'rock') {
        return 'user';
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

//state result
const computer = getComputerChoice();
const user = getUserChoice();
console.log(computer);
console.log(user);
console.log(playRound(computer, user));