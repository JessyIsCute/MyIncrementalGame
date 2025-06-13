const interactWorld = () => {


     let location = gameState.currentLocation;
     let celltype = gameState.table[location.x + location.y * gameState.mapWidth].celltype;

     if(gameState.interactCost > gameState.water) {
          return;
     }
     else {
          gameState.water -= gameState.interactCost;
          gameState.interactCost *= 2;
     }

     console.log(gameState.table[location.x + location.y * gameState.mapWidth].cell.activated);
     gameState.table[location.x + location.y * gameState.mapWidth].cell.activated = true;
     console.log(gameState.table[location.x + location.y * gameState.mapWidth].cell.activated);
     
}


const movePlayer = (direction) => {
     

     let location = gameState.currentLocation;
     
     if(gameState.moveCost > gameState.water) {
          
          console.log("Not enough water to move");
          return;
     }
     else {
          gameState.water -= gameState.moveCost;
          gameState.moveCost *= 10;
     }

     gameState.table[location.x + location.y * gameState.mapWidth].cell.classList.remove("player");

     if(direction){
     if (direction.id === "up") {
          location.y = Math.max(0, location.y - 1);
     } else if (direction.id === "down") {
          location.y = Math.min(gameState.mapHeight - 1, location.y + 1);
     } else if (direction.id === "left") {
          location.x = Math.max(0, location.x - 1);
     } else if (direction.id === "right") {
          location.x = Math.min(gameState.mapWidth - 1, location.x + 1);
     }
     } 
     gameState.table[location.x + location.y * gameState.mapWidth].cell.classList.add("player");
     gameState.currentLocation = { x: location.x, y: location.y };
     

     revealAroundPlayer();

     
}

const revealAroundPlayer = () => {
    const { x, y } = gameState.currentLocation;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            // Check bounds
            if (
                nx >= 0 && nx < gameState.mapWidth &&
                ny >= 0 && ny < gameState.mapHeight
            ) {
                const index = nx + ny * gameState.mapWidth;
                const cellObj = gameState.table[index];
                if (cellObj.celltype === "Hidden") {
                    cellObj.celltype = "Revealed";
                    cellObj.cell.classList.remove("hidden");
                    cellObj.cell.classList.add("revealed");
                }
            }
        }
    }
};