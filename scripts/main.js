 const global = {
     table: [],
     count: 0
 } //kikj]j

 window.addEventListener("DOMContentLoaded", () => {
     let button = document.getElementById("red");
     button.addEventListener("click", increaseCount);
     createTable();
 }
);

const increaseCount = () => {
     let count = document.getElementById("counter");
     count++
     console.log(global.table);
}
const createTable = () => {
     let table = document.createElement("table");
     table.id = "myTable";
     let world = document.getElementById("world")
     world.appendChild(table);
 
     
    
     
     for (let y = 0; y < 10; y++) {
          

          let row = document.createElement("tr");
          table.appendChild(row);
          

          for (let x = 0; x < 10; x++) {
               let cell = document.createElement("td");
               cell.textContent = `${x} ${y}`;
               row.appendChild(cell);
               cell.classList.add("worldspace");




               worldspace = {
                cell: cell,
                x: x,
                y: y,
               };

               global.table.push(worldspace);
          }
     }
}