let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const actionMessage = document.getElementById('action-message');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(choice) {
    if (choice === 'rock') return 'Rock 🪨';
    if (choice === 'paper') return 'Paper 📄';
    return 'Scissors ✂️';
}

function win(userChoice, computerChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    actionMessage.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You steal the show! 🌟`;
    document.querySelector('.game-container').classList.add('glow-win');
    setTimeout(() => document.querySelector('.game-container').classList.remove('glow-win'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    actionMessage.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. The paparazzi got you! 📸`;
    document.querySelector('.game-container').classList.add('glow-lose');
    setTimeout(() => document.querySelector('.game-container').classList.remove('glow-lose'), 500);
}

function draw(userChoice, computerChoice) {
    actionMessage.innerHTML = `Both chose ${convertToWord(userChoice)}. It's a red carpet standoff! 🤝`;
    document.querySelector('.game-container').classList.add('glow-tie');
    setTimeout(() => document.querySelector('.game-container').classList.remove('glow-tie'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockButton.addEventListener('click', () => game('rock'));
    paperButton.addEventListener('click', () => game('paper'));
    scissorsButton.addEventListener('click', () => game('scissors'));
}

main();