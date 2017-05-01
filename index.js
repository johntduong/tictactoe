//it needs a way to start a new game
var gameComplete = false;
var gameBoard = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

if (gameComplete) {
 alert('Starting a new game!');
 gameBoard = [
              [1,2,3],
              [4,5,6],
              [7,8,9]
              ];
  gameComplete = false;
} else {
  var playerMoves = {
    playerOne: [],
    playerTwo: []
  };
  while (!gameComplete) {
    for (var i = 1; i < 3; i++) {
      var playerMove = submitMove;
      if (i === 1) {
        playerMoves.playerOne.push(playerMove);
      }
    }
  }
}



//it needs a way to let users submit a command/move
var submitMove = function() {
  prompt('The current board is: ' + JSON.Stringify(gameBoard) + 'Please enter a number to pick a spot!');
};

//it needs a way to validate the game is finished and, if so, show the result

