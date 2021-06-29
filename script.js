const options = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  let playerEntry = prompt("Rock, Paper, or Scissors?").toUpperCase();
  return ( // TODO: This logic can be rewritten to avoid confusing anonymous IIFE below
    options.includes(playerEntry) ? //if playerEntry value is one of the options
    playerEntry : //return the entry or
    (() => {     // if not, immediately invoke this function to alert user of error and prompt again
      alert(`Sorry, that wasn't one of the choices.`);
      return playerPlay();
    })()
  )
}

function playRound() {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  let win;

  if (playerSelection == computerSelection) return "It's a draw!";

  switch(playerSelection) {
    case 'ROCK':
      if (computerSelection == 'PAPER') win = false;
      else win = true;
      break;
    case 'PAPER':
      if (computerSelection == 'SCISSORS') win = false;
      else win = true;
      break;
    case 'SCISSORS':
      if (computerSelection == 'ROCK') win = false;
      else win = true;
      break;
  }

  let finalMsg = (
    win ?
    `You win! ${playerSelection} beats ${computerSelection}!` :
    `Sorry, ${computerSelection} beats ${playerSelection}. You lose!`
  );

  return finalMsg;
}

function game() {
  for (i=0; i<5; i++) {
    console.log(playRound());
  }
}



//
//
//
//
//
