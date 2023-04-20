// Making the grid of the game
(function createGameBoard() {
  let gameBoard = [[], [], []];
  let gameGrid = document.querySelector(".game");
  let id = 1; // This id will be used as an attribute to the grid Element that will be added
  for (let i = 0; i < 3; i++) {
    // Adding element to a line
    for (let j = 0; j < 3; j++) {
      // Adding Element to columns
      let gameGridElement = document.createElement("div"); // A grid Element that will be added
      gameGridElement.classList.add("game-grid-Element");
      gameGridElement.setAttribute("id", id++);
      gameGrid.appendChild(gameGridElement);
    }
  }
})();

//Creating the game board

let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

//Getting the user's choice
let userChoice = "";
function getUserChoice() {
  window.addEventListener("click", (e) => {
    if (
      userChoice === "" &&
      e.target.classList.contains("choice") &&
      !gameHasStarted()
    ) {
      userChoice = e.target.textContent;
    }
    console.log(userChoice);
  });
}
//Constructor of players
function player(userChoice) {
  this.choice = userChoice;
}
//Checking wether the game has started or not in order to give the player the possibility to change his choice

function gameHasStarted() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] != "") {
        return true;
      }
    }
  }
  return false;
}
//Making user round
function userRound(userChoice) {
  //get user round and update gameBoard
}
//Checking wether the game has ended
function weHaveAWinner() {
  if (gameHasStarted()) {
    //check if winning conditions are verified
  }
}
// The game Function

function game() {
  while (!weHaveAWinner()) {
    //userRound(userChoice);
  }
}
