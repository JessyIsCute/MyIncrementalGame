 const global = {
     table: [],
     mapWidth: 11,
     mapHeight: 11,
     currentLocation: { x: 5, y: 5 },


     water: 0,
     waterIncrement: 1,
     

 } 

 window.addEventListener("DOMContentLoaded", () => {
     let waterButton = document.getElementById("waterButton");
     
     createTable();
     
     let buttonup = document.getElementById("buttonup");
     let buttondown = document.getElementById("buttondown");
     let buttonleft = document.getElementById("buttonleft");
     let buttonright = document.getElementById("buttonright");
     buttonup.addEventListener("click",  () => movePlayer(buttonup))
     buttondown.addEventListener("click", () => movePlayer(buttondown))
     buttonleft.addEventListener("click", () => movePlayer(buttonleft))
     buttonright.addEventListener("click", () => movePlayer(buttonright))

     // Listen for keyboard events
     document.addEventListener("keydown", function(event) {
          switch (event.key) {
               case "ArrowUp":
                    movePlayer(buttonup);
                    break;
               case "ArrowDown":
                    movePlayer(buttondown);
                    break;
               case "ArrowLeft":
                    movePlayer(buttonleft);
                    break;
               case "ArrowRight":
                    movePlayer(buttonright);
                    break;
               // Example: WASD keys
               case "w":
               case "W":
                    movePlayer(buttonup);
                    break;
               case "s":
               case "S":
                    movePlayer(buttondown);
                    break;
               case "a":
               case "A":
                    movePlayer(buttonleft);
                    break;
               case "d":
               case "D":
                    movePlayer(buttonright);
                    break;
               case " ":
                    interactWorld();
                    break;
               // Add more cases for other keys as needed
          }

     
     });

     movePlayer();
     runGameLoop();
});


const runGameLoop = () => {
    setInterval(updateGame, 1000); 
}

const updateGame = () => {
     let water = document.getElementById("water");
     let waterValue = parseInt(water.innerText, 10);
     let waterIncrement = 1;
     water.innerText = waterValue + waterIncrement;
}

const interactWorld = () => {
     let location = global.currentLocation;
     let celltype = global.table[location.x + location.y * global.mapWidth].celltype;

     if(celltype === "Hidden") {
          global.table[location.x + location.y * global.mapWidth].celltype = "Revealed";
          global.table[location.x + location.y * global.mapWidth].cell.classList.remove("hidden");
          global.table[location.x + location.y * global.mapWidth].cell.classList.add("revealed");
     }
     
}

const createTable = () => {
     let table = document.createElement("table");
     table.id = "myTable";
     let world = document.getElementById("world")
     world.appendChild(table);

     
     for (let y = 0; y < global.mapHeight; y++) {
          

          let row = document.createElement("tr");
          table.appendChild(row);
          

          for (let x = 0; x < global.mapWidth; x++) {
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

               global.table.push(worldspace);
          }
     }
}

const movePlayer = (direction) => {
     let location = global.currentLocation;
     console.log(global.table[location.x+location.y*global.mapWidth])
     global.table[location.x + location.y * global.mapWidth].cell.classList.remove("player");

     if(direction){
     if (direction.id === "buttonup") {
          location.y = Math.max(0, location.y - 1);
     } else if (direction.id === "buttondown") {
          location.y = Math.min(global.mapHeight - 1, location.y + 1);
     } else if (direction.id === "buttonleft") {
          location.x = Math.max(0, location.x - 1);
     } else if (direction.id === "buttonright") {
          location.x = Math.min(global.mapWidth - 1, location.x + 1);
     }
     } 
     
     console.log(`Player moved to: ${location.x}, ${location.y}`);
     global.table[location.x + location.y * global.mapWidth].cell.classList.add("player");
     global.currentLocation = { x: location.x, y: location.y };
     
}