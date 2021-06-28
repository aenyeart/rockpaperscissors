const options = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}
function playerPlay() {
  let playerEntry = prompt("Rock, Paper, or Scissors?").toUpperCase();
  return (options.includes(playerEntry)) ? playerEntry : null; // TODO: replace null with alert and new prompt
}
function playRound(playerSelection, computerSelection) {

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


let playerSelection = playerPlay();
let computerSelection = computerPlay();

if (playerSelection = null) {

} else {
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
}



//
//
//
//
//
