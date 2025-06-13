const interactWorld = () => {


     let location = gameState.currentLocation;
     let celltype = gameState.table[location.x + location.y * gameState.mapWidth].celltype;

   

     gameState.table[location.x + location.y * gameState.mapWidth].cellActived = true;

     console.log("Interacting with cell at", location, "of type", celltype);
        if (celltypes[celltype].interactable && gameState.interactCost <= gameState.water && !gameState.table[location.x + location.y * gameState.mapWidth].cellActivated) {
            gameState.water -= gameState.interactCost;
            gameState.interactCost *= 2;
            gameState.table[location.x + location.y * gameState.mapWidth].cellActivated = true;
            
            console.log("Interacted with cell at", location, "of YIPEEEEEEEEE", celltype);
            switch (celltype) {
                case "water":
                    gameState.waterIncrement += 1;
                    break;
                case "tree":
                    gameState.waterIncrement *= 1.1; // Trees give less water
                    break;
                case "rock":
                    break;
                default:
            }
        }
            
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
     if (direction === "up") {
          location.y = Math.max(0, location.y - 1);
     } else if (direction === "down") {
          location.y = Math.min(gameState.mapHeight - 1, location.y + 1);
     } else if (direction === "left") {
          location.x = Math.max(0, location.x - 1);
     } else if (direction === "right") {
          location.x = Math.min(gameState.mapWidth - 1, location.x + 1);
     }
     } 
     gameState.table[location.x + location.y * gameState.mapWidth].cell.classList.add("player");
     gameState.currentLocation = location ;
     

     revealAroundPlayer();

     
}

function getTotalChance(celltypes) {
    return Object.values(celltypes)
        .reduce((sum, type) => sum + (type.appearenceChance || 0), 0);
}

function pickCellType(celltypes, totalChance) {
    const chanceRoll = Math.random() * totalChance;
    let cumulativeChance = 0;
    for (const key of Object.keys(celltypes)) {
        cumulativeChance += celltypes[key].appearenceChance || 0;
        if (chanceRoll < cumulativeChance) {
            return key;
        }
    }
    // Fallback: return a default type if none matched
    return "Player"; // or any other default type
}

function revealCell(worldspace, celltypes) {
    if (worldspace.celltype !== "hidden") {
        return; // Cell is already revealed
    }

    let totalChance = getTotalChance(celltypes);
    let newType = pickCellType(celltypes, totalChance);

    worldspace.celltype = newType;
    worldspace.cell.classList.remove("hidden");
    worldspace.cell.classList.add(newType);
}

const revealAroundPlayer = () => {
    const { x, y } = gameState.currentLocation;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (
                nx >= 0 && nx < gameState.mapWidth &&
                ny >= 0 && ny < gameState.mapHeight
            ) {
                const index = nx + ny * gameState.mapWidth;
                const worldspace = gameState.table[index];
                if (worldspace.celltype === "hidden") {
                    revealCell(worldspace, celltypes);
                }
            }
        }
    }
};

const updateCellInfo = (x, y) => {
    const index = x + y * gameState.mapWidth;
    const worldspace = gameState.table[index];
    gameState.table[index].cellDescription = celltypes[worldspace.celltype].description; 
    gameState.table[index].cellActived = worldspace.cell.activated;
    }