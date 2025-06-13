const inputs = () => {
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
        
            (console.log("boop!"));
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
}