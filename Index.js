const boardSquares = document.querySelectorAll(".inner");
const newPlayerButton = document.querySelector(".addPlayer");
const nameInput = document.querySelector("input");

const game = {
  i: 0,
  currentPlayer: game.board.players[i],
  board: {
    squares: [],
    players: [],
  },

  playerFactory: (name) => {
    if (game.players[0]) {
      /* Because if we click the button to create new player,
       * The new player object will always be immediately pushed
       * into the gameBoard.players array. */
      symbol = "O";
    } else {
      symbol = "X";
    }

    return { name, symbol };
  },

  // checkForMatch: () =>{
  //   if (game.board.squares)
  // }
};

newPlayerButton.addEventListener("click", () => {
  if (game.board.players.length < 3) {
    game.board.players.push(game.playerFactory(nameInput.value));
    nameInput.value = "";
  } else alert("Only two players allowed for now");
});

boardSquares.forEach((square) => {
  game.board.squares.push(square);
  square.addEventListener("click", function () {
    if (!this.symbol) {
      this.symbol = currentPlayer.symbol;
      this.textContent = currentPlayer.symbol;
      if (game.i === 0) {
        game.i = 1;
      } else game.i = 0;
    }
  });
});
