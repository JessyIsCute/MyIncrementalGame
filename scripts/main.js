 const global = {
     table: [],
     mapWidth: 10,
     mapHeight: 10,
     count: 0,
     currentLocation: { x: 0, y: 0 }

 } 

 window.addEventListener("DOMContentLoaded", () => {
     let waterButton = document.getElementById("waterButton");
     waterButton.addEventListener("click", increaseCount);
     createTable();

     let buttonup = document.getElementById("buttonup");
     let buttondown = document.getElementById("buttondown");
     let buttonleft = document.getElementById("buttonleft");
     let buttonright = document.getElementById("buttonright");
     buttonup.addEventListener("click",  () => movePlayer(buttonup))
     buttondown.addEventListener("click", () => movePlayer(buttondown))
     buttonleft.addEventListener("click", () => movePlayer(buttonleft))
     buttonright.addEventListener("click", () => movePlayer(buttonright))
 }
);

const increaseCount = () => {
     let water = document.getElementById("water");
     let waterValue = parseInt(water.innerText, 10);
     let waterIncrement = 1;
     water.innerText = waterValue + waterIncrement;
     
     console.log(water);
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

               worldspace = {
                cell: cell,
                x: x,
                y: y,
                celltype: "grass"
               };

               cell.textContent = `${x} ${y} ${worldspace.celltype} "\n"`;
               row.appendChild(cell);
               cell.classList.add("worldspace");

               

               global.table.push(worldspace);
          }
     }
}

const movePlayer = (direction) => {
     let location = global.currentLocation;
     console.log(global.table[location.x+location.y*global.mapWidth])
     global.table[location.x + location.y * global.mapWidth].cell.classList.remove("player");

     if (direction.id === "buttonup") {
          location.y = Math.max(0, location.y - 1);
     } else if (direction.id === "buttondown") {
          location.y = Math.min(global.mapHeight - 1, location.y + 1);
     } else if (direction.id === "buttonleft") {
          location.x = Math.max(0, location.x - 1);
     } else if (direction.id === "buttonright") {
          location.x = Math.min(global.mapWidth - 1, location.x + 1);
     }
     
     global.table[location.x + location.y * global.mapWidth].cell.classList.add("player");
     let newLocation = { x: location.x, y: location.y };
     
}