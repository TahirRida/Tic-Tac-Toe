// Making the grid of the game
(function createGameBoard() {
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

let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

//Getting the user's choice
let userChoice = "x";
/*function getUserChoice() {
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
*/
//Constructor of players
function player(userChoice, isComputer) {
  let player = {};
  player.choice = userChoice;
  player.isComputer = isComputer;
  return player;
}
//Checking wether the game has started or not in order to give the player the possibility to change his choice

function gameHasStarted() {
  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] != "") {
      return true;
    }
  }
  return false;
}

//displaying gameBoard
function display(gameBoard) {
  for (let i = 0; i < gameBoard.length; i += 3) {
    console.log(`${gameBoard[i]}|${gameBoard[i + 1]}|${gameBoard[i + 2]}`);
    console.log("");
  }
  console.log("-------------------------");
}
//Making user round
function userRound(userChoice, isComputerRound) {
  let cell; //This is the cell that will be filled due to this Round
  if (!isComputerRound) {
    cell = prompt("choose the number of the cell you wanna insert x into ");
    while (gameBoard[cell] != " ") {
      cell = prompt("choose an empty cell");
    }
  } else {
    let i = Math.floor(Math.random() * 9);
    while (gameBoard[i] != " ") {
      i = Math.floor(Math.random() * 9);
    }
    cell = i;
  }
  gameBoard[cell] = userChoice;
}
//Checking wether the game has ended
function weHaveAWinner() {
  if (gameHasStarted()) {
  }
  return false; // This statement was written only to see the gameon the console, remove it after
}
//checking wether the gameBoard is full
function isTaken(element, index, array) {
  return element != " ";
}
function isFull(gameBoard) {
  return gameBoard.every(isTaken);
}
function gameEnded() {
  if (weHaveAWinner() || isFull(gameBoard)) {
    return true;
  }
  return false;
}
// The game Function

function game() {
  let human = player("X", false);
  let computer = player("O", true);
  while (!gameEnded()) {
    display(gameBoard);
    userRound(human.choice, human.isComputer);
    userRound(computer.choice, computer.isComputer);
    display(gameBoard);
  }
}
game();
