alert("Welcome to Rock, Paper, Sciccors!");

var stillPlaying = true;

var moves = ["R", "P", "S"];

var playerWins = 0;

var computerWins = 0;

var ties = 0;

var gamesPlayed = 0;

function rockPaperSciccors() {
  var playerMove = "";
  var computerMoveIndex = Math.floor(Math.random() * moves.length);
  var computerMove = moves[computerMoveIndex];

  while (playerMove != "R" && playerMove != "P" && playerMove != "S" ) {
    playerMove = prompt("Enter 'R' for rock, 'P' for paper or 'S' for Scissors:");
    playerMove = playerMove.toUpperCase();
    if (playerMove != "R" && playerMove != "P" && playerMove != "S" ) {
      alert('Invalid Input \nTry again')
    }
  }

  if (playerMove === "R" && computerMove === "S") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "R" && computerMove === "P") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else if (playerMove === "R" && computerMove === "R") {
<<<<<<< HEAD
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', It\'s a tie!');
=======
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
>>>>>>> 6a9ef479f505f3b9d7f2dd71a7a46bf0e5dbb86f
    ties++;
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "S") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "R") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "P" && computerMove === "P") {
<<<<<<< HEAD
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', It\'s a tie!');
=======
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
>>>>>>> 6a9ef479f505f3b9d7f2dd71a7a46bf0e5dbb86f
    ties++;
    gamesPlayed++;
  } else if (playerMove === "S" && computerMove === "P") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', You win!');
    playerWins++;
    gamesPlayed++;
  } else if (playerMove === "S" && computerMove === "R") {
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', Computer wins!');
    computerWins++;
    gamesPlayed++;
  } else {
<<<<<<< HEAD
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ', It\'s a tie!');
=======
    alert('You played ' + playerMove + ', the computer played ' + computerMove + ' It\'s a tie!');
>>>>>>> 6a9ef479f505f3b9d7f2dd71a7a46bf0e5dbb86f
    ties++;
    gamesPlayed++;
  }
  
}

while (stillPlaying) {
  rockPaperSciccors();
  alert('R, P, S record:\nPlayer: ' + playerWins + '\nComputer: ' + computerWins + '\nTies: ' + ties + '\nTotal Games: ' + gamesPlayed);
  stillPlaying = confirm('Play again?');
}

alert('bye!');
