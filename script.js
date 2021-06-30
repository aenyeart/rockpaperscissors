const playOptions = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
let cancellation = false; // Used later to end game if user clicks "Cancel"

function computerPlay() {
  return playOptions[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  let playerEntry = prompt("Rock, Paper, or Scissors?");
  if (playerEntry === null) {
    cancellation = true;
    return;
  }
  if (playerEntry !== null && playerEntry !== undefined) {
    playerEntry = playerEntry.toUpperCase();      // converts entry to allcaps
    if (!playOptions.includes(playerEntry)) {     // if playerEntry not in playOptions[]
      alert(`Sorry, that wasn't one of the choices.`);  // alert user of error and prompt again
      playerEntry = playerPlay();
    }
  }
  return playerEntry; // return the entry
}

function playRound() {
  let playerSelection = playerPlay();
  if (cancellation) return;

  let computerSelection = computerPlay();
  let win;
  let roundEndMsg = '';


  if (playerSelection == computerSelection) return "It's a draw!";

  switch(playerSelection) {
    case 'ROCK':
      win = (computerSelection == 'PAPER') ? false : true;
      break;
    case 'PAPER':
      win = (computerSelection == 'SCISSORS') ? false : true;
      break;
    case 'SCISSORS':
      win = (computerSelection == 'ROCK') ? false : true;
      break;
  }

  if (win) {
    playerScore++;
    roundEndMsg = `You win this round! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    roundEndMsg = `You lose this round! ${computerSelection} beats ${playerSelection}!`;
  }
  roundEndMsg += `\nWins: ${playerScore} | Losses: ${computerScore}`
  return roundEndMsg;
}

function game() {
  while (playerScore < 3 && computerScore < 3) { // I removed playCount because if this is "best of five rounds", then the first player to reach three points wins the game and total non-draw rounds will never exceed 5 anyway.
    if (cancellation) return; // Aborts gameplay
    console.log(playRound());
  }
  let winLose = (playerScore > computerScore)? "WON" : "LOSE";
  console.log( `You ${winLose} the game! \n\tFINAL SCORE: \nHuman: ${playerScore} | Computer: ${computerScore}`
  );
}

game();


//
//
//
//
//
