// Declarations
var stillPlaying = true;
var moves = ["R", "P", "S"];
var playerWins = 0;
var computerWins = 0;
var ties = 0;
var gamesPlayed = 0; 

// User greeting
alert("Welcome to Rock, Paper, Sciccors!");

// Function to get and validate the player's move
function getPlayerMove() {
  var move = "";
  while (move != "R" && move != "P" && move != "S" ) {
    move = prompt("Enter 'R' for rock, 'P' for paper or 'S' for Scissors:");
    move = move.toUpperCase();
    if (move != "R" && move != "P" && move != "S") {
      alert('Invalid Input\nTry again');
    }
  }
  return move;
}

function getComputerMove() {
  var moveIndex = Math.floor(Math.random() * moves.length);
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
    alert('You played ' + p + ', the computer played ' + c + ', You win!');
    playerWins++;
    gamesPlayed++;
  //computer wins
  } else if (
    (p === "R" && c === "P") || 
    (p === "P" && c === "S") || 
    (p === "S" && c === "R")
  ) {
    alert('You played ' + p + ', the computer played ' + c + ', Computer wins!');
    computerWins++;
    gamesPlayed++;
  // tie
  } else {
    alert('You played ' + p + ', the computer played ' + c + ', It\'s a tie!');
    ties++;
    gamesPlayed++;
  }
}

// Main game function
function rockPaperSciccors() {
  // Stores return value from getPlayerMove()
  var playerMove = getPlayerMove();
  // Stores return value from getComputerMove()
  var computerMove = getComputerMove();
  // Compares player move and computer move and decides winner
  shoot(playerMove, computerMove);
}

// while loop calls the game function as long as the user chooses to continue
while (stillPlaying) {
  rockPaperSciccors();
  alert('R, P, S record:\nPlayer: ' + playerWins + '\nComputer: ' + computerWins + '\nTies: ' + ties + '\nTotal Games: ' + gamesPlayed);
  stillPlaying = confirm('Play again?');
}
alert('bye!');