// Declarations
var stillPlaying = true;
var moves = ["R", "P", "S"];
var playerWins = 0;
var computerWins = 0;
var ties = 0;
var gamesPlayed = 0; 

// User greeting
alert("Welcome to Rock, Paper, Sciccors!");

// Main game function
function rockPaperSciccors() {
  // Stores return value from getPlayerMove()
  var playerMove = getPlayerMove();
  // Stores return value from getComputerMove()
  var computerMove = getComputerMove();
  //displays moves
  alert('You played ' + playerMove + ', the computer played ' + computerMove)
  // Compares player move and computer move and decides winner
  shoot(playerMove, computerMove);
}

// Function to get and validate the player's move
function getPlayerMove() {
  var move = "";
  while (move != "R" && move != "P" && move != "S" ) {
    move = prompt("Enter 'R' for rock, 'P' for paper or 'S' for Scissors:").toUpperCase();
    if (move != "R" && move != "P" && move != "S") {
      alert('Invalid Input\nTry again');
    }
  }
  return move;
}

// Function to generate computer move
function getComputerMove() {
  //get a random index based on the number of options in the moves array
  var moveIndex = Math.floor(Math.random() * moves.length);
  //get the item at that index
  var computerMove = moves[moveIndex];
  return computerMove;
}

// Function takes arguments playerMove and computerMove from rockPaperScissors() and decides who wins
function shoot(p, c) {
  // user wins
  if (
    (p === "R" && c === "S") ||
    (p === "P" && c === "R") ||
    (p === "S" && c === "P")
  ) {
    win();
    
  //computer wins
  } else if (
    (p === "R" && c === "P") || 
    (p === "P" && c === "S") || 
    (p === "S" && c === "R")
  ) {
    lose();
  // tie
  } else {
    tie();
  }
}

// called if player won
function win() {
  alert('You win!');
  // increments playerWins and gamesPlayed variables
  playerWins++;
  gamesPlayed++;
}

// called if computer won 
function lose() {
  alert('Computer wins!');
  // increments computerWins and gamesPlayed
  computerWins++;
  gamesPlayed++;
}

// called if game was a tie 
function tie() {
  alert('It\'s a tie!');
  // increments ties and gamesPlayed
  ties++;
  gamesPlayed++;
}

// while loop calls the game function as long as the user chooses to continue
while (stillPlaying) {
  rockPaperSciccors();
  alert('R, P, S record:\nPlayer: ' + playerWins + '\nComputer: ' + computerWins + '\nTies: ' + ties + '\nTotal Games: ' + gamesPlayed);
  stillPlaying = confirm('Play again?');
}
alert('bye!');