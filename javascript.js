function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanSelection = prompt('Rock, paper, or scissors, humanoid?');
    return humanSelection.toLowerCase().trim();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let roundOutcome;
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundOutcome = 'It\'s a tie!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundOutcome = 'You win this round!';
    } else {
        computerScore++;
        roundOutcome = 'Computer wins this round!';
    }

    return `\n${roundOutcome}\nYour score: ${humanScore}\nComputer score: ${computerScore}`;
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Limiting to 5 rounds
        console.log(playRound());
    }
}

playGame();