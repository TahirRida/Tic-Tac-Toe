// Making the grid of the game
let gameGrid = document.querySelector(".game");
let id = 1; // This id will be used as an attribute to the grid Element that will be added
for (let i = 0; i < 3; i++) {
  // Adding element to a line
  for (let j = 0; j < 3; j++) {
    // Adding Element to columns
    let gameGridElement = document.createElement("div"); // A grid Element that will be added
    gameGridElement.classList.add("game-grid-Element");
    gameGridElement.setAttribute("id", id++);
    gameGrid.addEventListener("click", () => {
      console.log(gameGrid.id);
    });
    gameGrid.appendChild(gameGridElement);
  }
}

// The logic of the game
