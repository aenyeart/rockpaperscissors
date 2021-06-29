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
  let finalMsg = '';

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

  if (win) {
    finalMsg = `You win this round! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
  } else {
    finalMsg = `You lose this round! ${computerSelection} beats ${playerSelection}!`;
    computerScore++;
  }

  return finalMsg;
}

function game() {
  while (playerScore < 3 && computerScore < 3) { // I removed playCount because if this is "best of five rounds", then the first player to reach three points wins the game and total non-draw rounds will never exceed 5 anyway. 
    console.log(playRound());
  }
  let winLose = (playerScore > computerScore)? "WIN" : "LOSE";
  console.log( `You ${winLose} the game! \
    FINAL SCORE: \
    Human: ${playerScore} \
    Computer: ${computerScore}`
  );
}

game();


//
//
//
//
//
