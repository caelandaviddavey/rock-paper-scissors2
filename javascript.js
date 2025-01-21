function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundOutcome;

    if (humanChoice === computerChoice) {
        roundOutcome = "It's a tie!";
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

    const resultMessage = `
${roundOutcome}
Your score: ${humanScore}
Computer score: ${computerScore}
`;
    console.log(resultMessage);

    return resultMessage;
}

function rockFunction() {
    playRound('rock');
}

function paperFunction() {
    playRound('paper');
}

function scissorsFunction() {
    playRound('scissors');
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', rockFunction);
paper.addEventListener('click', paperFunction);
scissors.addEventListener('click', scissorsFunction);

/*
function playGame() {
    for (let i = 0; i < 5; i++) { // Limiting to 5 rounds
        console.log(playRound());
    }
}


playGame();
*/