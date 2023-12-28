let playerScore = 0;
let computerScore = 0;
//const rockButton = document.querySelector('.rock');
//const paperButton = document.querySelector('.paper');
//const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.p-score');
const computerScoreSpan = document.querySelector('.c-score');
const buttons = document.querySelectorAll('button');


const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}


const playRound = (playerSelection, computerSelection) => {
    //console.log('1', playerSelection, '2', computerSelection);
    const p = document.createElement('p');

    if (playerSelection === computerSelection) {
        p.innerText = `It's a tie! You chose ${playerSelection}, and the computer also chose ${computerSelection}.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1; //computerScore = computerScore + 1
        p.innerText = "You lost! Rock beats Scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        p.innerText = "You won! Scissors beats Paper";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        p.innerText = "You lost! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        p.innerText = "You won! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        p.innerText = "You lost! Scissors beats Paper";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        p.innerText = "You won! Paper beats Rock";
        
    }
    p.style.color = 'white';
    outcomeDiv.appendChild(p);
}


const winner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2');
    if (playerScore === 5 ) {
        h2.innerText += `You won the game! Great job beating the computer! Reload the page to play again`;
        h2.style.color = '#00A36C';
        disableButtons();
    }
    
    if (computerScore === 5) {
        h2.innerText += `The Computer won the game! Reload the page to play again`;
        h2.style.color = '#ff0000';
        disableButtons();
    }
    outcomeDiv.appendChild(h2);
}


const displayScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score:  ${playerScore}`;
    computerScoreSpan.innerText = `Computer score:  ${computerScore}`;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = `${button.className}`;
        playRound(playerSelection, computerSelection);
        displayScores(playerScore, computerScore);
        winner(playerScore, computerScore);
    });
});

//rockButton.addEventListener('click', () => {
//    const computerSelection = getComputerChoice();
//    const playerSelection = 'rock';
//    playRound(playerSelection, computerSelection);
//    displayScores(playerScore, computerScore);
//    winner(playerScore, computerScore);
//});
//
//paperButton.addEventListener('click', () => {
//    const computerSelection = getComputerChoice();
//    const playerSelection = 'paper';
//    playRound(playerSelection, computerSelection);
//    displayScores(playerScore, computerScore);
//    winner(playerScore, computerScore);
//});
//
//scissorsButton.addEventListener('click', () => {
//    const computerSelection = getComputerChoice();
//    const playerSelection = 'scissors';
//    playRound(playerSelection, computerSelection);
//    displayScores(playerScore, computerScore);
//    winner(playerScore, computerScore);
//});

//const playerSelection = 'rock';

/*const game = () => {
    for (let i = 0; i< 5; i += 1) {
        const playerSelection = prompt('Start by picking: rock, paper, scissors' ).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log('1', playRound(playerSelection, computerSelection));
    }


    if(playerScore > computerScore) {
        return 'You beat the computer! Well done!'
    } else if (playerScore < computerScore) {
        return 'You got beat by computer!'
    } else {
        return 'You tied with the computer!'
    }
}

game();
*/ 