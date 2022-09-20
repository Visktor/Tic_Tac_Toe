const boardSquares = document.querySelectorAll(".inner");
const newPlayerButton = document.querySelector(".addPlayer");
const nameInput = document.querySelector("input");

const game = {
  i: 0,
  board: {
    squares: [],
    players: [],
  },

  playerFactory: (name) => {
    if (game.board.players[0]) {
      /* Because if we click the button to create new player,
       * The new player object will always be immediately pushed
       * into the gameBoard.players array. */
      symbol = "O";
    } else {
      symbol = "O";
    }

    return { name, symbol };
  },
};

function checkForMatch() {
  let Xarray = [];
  let Oarray = [];

  game.board.squares.forEach((square) => {
    if (square.symbol) {
      if (square.symbol === "X") {
        Xarray.push(game.board.squares.indexOf(square));
      } else if (square.symbol === "O") {
        Oarray.push(game.board.squares.indexOf(square));
      }
    }
  });
  (() => {
    if (
      (Xarray.includes(0) && Xarray.includes(1) && Xarray.includes(2)) ||
      (Xarray.includes(0) && Xarray.includes(3) && Xarray.includes(6)) ||
      (Xarray.includes(0) && Xarray.includes(4) && Xarray.includes(8)) ||
      (Xarray.includes(1) && Xarray.includes(4) && Xarray.includes(7)) ||
      (Xarray.includes(2) && Xarray.includes(5) && Xarray.includes(8)) ||
      (Xarray.includes(3) && Xarray.includes(4) && Xarray.includes(5)) ||
      (Xarray.includes(6) && Xarray.includes(7) && Xarray.includes(8))
    ) {
      alert("player 1 wins");
    } else if (
      (Oarray.includes(0) && Oarray.includes(1) && Oarray.includes(2)) ||
      (Oarray.includes(0) && Oarray.includes(3) && Oarray.includes(6)) ||
      (Oarray.includes(0) && Oarray.includes(4) && Oarray.includes(8)) ||
      (Oarray.includes(1) && Oarray.includes(4) && Oarray.includes(7)) ||
      (Oarray.includes(2) && Oarray.includes(5) && Oarray.includes(8)) ||
      (Oarray.includes(3) && Oarray.includes(4) && Oarray.includes(5)) ||
      (Oarray.includes(6) && Oarray.includes(7) && Oarray.includes(8))
    ) {
      alert("player 2 wins");
    }
  })();
}

newPlayerButton.addEventListener("click", () => {
  if (game.board.players.length < 2) {
    game.board.players.push(game.playerFactory(nameInput.value));
    nameInput.value = "";
  } else alert("Only two players allowed for now");
});

boardSquares.forEach((square) => {
  game.board.squares.push(square);
  square.addEventListener("click", function () {
    if (!this.symbol) {
      this.symbol = game.board.players[game.i].symbol;
      this.textContent = game.board.players[game.i].symbol;
    }
    checkForMatch();
    if (game.i === 0) {
      game.i = 1;
    } else game.i = 0;
  });
});
