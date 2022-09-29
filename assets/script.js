alert("Welcome to Rock, Paper, Sciccors!");

var stillPlaying = true;

var moves = ["R", "P", "S"];

var playerWins = 0;

var computerWins = 0;

var gamesPlayed = 0;

function rockPaperSciccors() {
  var playerMove = "";
  var computerMoveIndex = Math.floor(Math.random() * moves.length);
  var computerMove = moves[computerMoveIndex];

  while (playerMove != "R" && playerMove != "P" && playerMove != "S" ) {
    playerMove = prompt("Enter 'R' for rock, 'P' for paper or 'S' for Scissors:");
  }

  if (playerMove === "R" && computerMove === "S") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "R" && computerMove === "P") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else if (playerMove === "R" && computerMove === "R") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "S") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "R") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "P") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
    gamesPlayed++;
  } else if (playerMove === "S" && computerMove === "P") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "S" && computerMove === "R") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
    gamesPlayed++;
  }
  
}

while (stillPlaying) {
  rockPaperSciccors();
  alert('R, P, S record:\nPlayer: ' + playerWins + '\nComputer: ' + computerWins + '\nTotal Games: ' + gamesPlayed);
  stillPlaying = confirm('Play again?');
}

alert('bye!');
