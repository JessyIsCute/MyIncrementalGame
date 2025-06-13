const inputs = () => {
    

    // Listen for keyboard events
    document.addEventListener("keydown", function(event) {
        
        switch (event.key) {
            case "ArrowUp":
            case "w":
            case "W":
                movePlayer("up");
                break;
            case "ArrowDown":
            case "s":
            case "S":
                movePlayer("down");
                break;
            case "ArrowLeft":
            case "a":
            case "A":
                movePlayer("left");
                break;
            case "ArrowRight":
            case "d":
            case "D":
                movePlayer("right");
                break;
            case " ":
                interactWorld();
                break;
            // Add more cases for other keys as needed
        }


    });
}