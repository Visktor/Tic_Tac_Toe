const boardSquares = document.querySelectorAll(".inner");

const gameBoard = {
  squares: [],
  players: [],
};

const playerFactory = (name) => {
  if (gameBoard.players.length > 3) {
    if (gameBoard.players[0]) {
      /* Because if we click the button to create new player,
       * The new player object will always be immediately pushed
       * into the gameBoard.players object. */
      symbol = "O";
    } else {
      symbol = "X";
    }
  }
  return { name, symbol };
};
