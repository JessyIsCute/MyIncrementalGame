/*
let worldspace = {
    cell: cell, // This is the DOM element
    x: x,
    y: y,
    celltype: "hidden",
    cellDescription: "This is a hidden cell",
    cellActived: false
};
*/

const celltypes = {
     "player": {
        class: "player",
        description: "This is the player's current location.",
        interactable: false,
        appearenceChance: null,
        traversable: "Special",
    },
    "hidden": {
        class: "hidden",
        description: "This cell is hidden and not yet Empty.",
        interactable: false,
        appearenceChance: "special", 
        },
    "empty": {
        class: "empty",
        description: "This cell has been Empty.",
        interactable: false,
        appearenceChance: 0.2,
        traversable: true, // Can be traversed by the player
    },
    "water": {
        class: "water",
        description: "This cell contains water.",
        interactable: true,
        appearenceChance: 0.9, // 10% chance to appear
        traversable: true, // Can be traversed by the player

    },
    "tree": {
        class: "tree",
        description: "This cell contains a tree.",
        interactable: true,
        appearenceChance: 0.95, // 5% chance to appear
        traversable: true, // Can be traversed by the player

    },
    "rock": {
        class: "rock",
        description: "This cell contains a rock, Can currently traverse: " + traversable,
        interactable: true,
        appearenceChance: 0.5, // 2% chance to appear
        traversable: false, // 
    },
    // Add more cell types as needed
};