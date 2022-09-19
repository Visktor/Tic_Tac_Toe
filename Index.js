const boardSquares = document.querySelectorAll(".inner");
const newPlayerButton = document.querySelector(".addPlayer");
const nameInput = document.querySelector("input");

const gameBoard = {
  squares: [],
  players: [],
};

const playerFactory = (name) => {
  if (gameBoard.players[0]) {
    /* Because if we click the button to create new player,
     * The new player object will always be immediately pushed
     * into the gameBoard.players array. */
    symbol = "O";
  } else {
    symbol = "X";
  }

  return { name, symbol };
};

newPlayerButton.addEventListener("click", () => {
  if (gameBoard.players.length < 3) {
    gameBoard.players.push(playerFactory(nameInput.value));
    nameInput.value = "";
  }
});
