window.addEventListener("DOMContentLoaded", () => {
      gameState.moveCostDisplay = document.getElementById("moveCostDisplay");
    gameState.interactCostDisplay = document.getElementById("interactCostDisplay");
    gameState.waterDisplay = document.getElementsByClassName("waterDisplay");

     createTable();
     inputs();
     runGameLoop();
});


const runGameLoop = () => {
    setInterval(() => updateGame(1/30), 1000/30); // 1/30 seconds per frame
}

const updateGame = (elapsedTime) => {
     let waterValue = gameState.water
     let waterIncrement = gameState.waterIncrement;

     waterValue += waterIncrement * elapsedTime;

     gameState.water = waterValue;

     for (const element of gameState.waterDisplay) {
          element.innerText = Math.floor(gameState.water);
     }
     

     if (gameState.moveCostDisplay) {
        gameState.moveCostDisplay.innerText =  Math.floor(gameState.moveCost);
     }
     if (gameState.interactCostDisplay) {
        gameState.interactCostDisplay.innerText =  Math.floor(gameState.interactCost);
     }


}


const createTable = () => {
     let table = document.createElement("table");
     table.id = "myTable";
     let world = document.getElementById("world")
     world.appendChild(table);

     
     for (let y = 0; y < gameState.mapHeight; y++) {
          

          let row = document.createElement("tr");
          table.appendChild(row);
          

          for (let x = 0; x < gameState.mapWidth; x++) {
               let cell = document.createElement("td");

               let worldspace = {
                cell: cell,
                x: x,
                y: y,
                celltype: "Hidden",
                cellActived: false,
               };

               row.appendChild(cell);
               cell.classList.add("worldspace");
               cell.classList.add("hidden");
               
               cell.addEventListener("mousedown", () => {
                document.getElementById("cellInfo").textContent =
                 `Location: (${worldspace.x}, ${worldspace.y}), Type: ${worldspace.celltype} Active: ${worldspace.cellActived}`;
               });

               gameState.table.push(worldspace);
          }
     }

     gameState.table[gameState.currentLocation.x + gameState.currentLocation.y * gameState.mapWidth].cell.classList.add("player");
}
