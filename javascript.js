
const getComputerChoice = () => {
    let choice = '';
    let val = Math.random();
    console.log(val);
    if (val <= 0.33) {
        choice = 'rock';
    }
    else if (val <= 0.66) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    console.log("Computer choice is: " + choice);
    return choice;
}

const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach((input) => {

  input.addEventListener('click', (e) => {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    let outcome = '';

    console.log(playerSelection);

    if (playerSelection === computerSelection) {
      outcome = 'It\'s a tie, you both picked ' + playerSelection;
    } else if (
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
    ) { 
      computerScore++;
      outcome = `The computer's ${computerSelection} beat your ${playerSelection}`;
    } else {
      playerScore++;
      outcome = `Your ${playerSelection} beat the computer's ${computerSelection}`;
    }
    updateScore(playerScore, computerScore, outcome);
    console.log(outcome);
    return outcome;
  }
  
  const updateScore = (playerScore, computerScore, result) => {
    const scoreBoard = document.querySelector('.scoreboard');
    const outcome = document.querySelector('#outcome');

    scoreBoard.textContent = `${playerScore} - ${computerScore}`;


    if (playerScore >= 5) {
      outcome.textContent = `You win! ${result}`
    }
    else if (computerScore >= 5) {
      outcome.textContent = `You lose! ${result}`
    }
    else {
      outcome.textContent = result;
    }


  } 








