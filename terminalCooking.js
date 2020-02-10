/* This project is inspired by Cooking Adventures, which is a catering game wherein you serve customers customized orders 
   with the goal of achieving x gross profit under a time limit. There are many scenarios with different types of cuisine
   and many different ways to prepare food, and your time management / reflexes are very often tested. You are also able 
   to upgrade your kitchen, cookware, product, and even your kitchen. There are also unlockable outfits and the like that
   I will not be implementing in this terminal edition. */

const fs = require('fs'),
    readline = require('readLine'),
    interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

const hotkeys = [
    // New Game [0]
    'n',
    // Load Save [1]
    'l',
    // Help [2]
    'h'
    ];

/* Version 1
function welcome() {
    console.log('Welcome to Terminal Cook!');
    console.log('[ N ] New Game | [ L ] Load Saved Game | [ H ] Help');
};

function initializeGame(input) {
    // New game
    if (input === 'N') {
        // Create csv file with saveName in saves directory
        console.log('Confirm new game?');
        console.log('[ Y ] / [ N ]');
    } else {
        if (input === 'L') {
            // Load csv file in saves directory
        };
    };
};
*/

// Version 2
interface.question('Welcome to Terminal Cook!\n [ N ]New Game\n [ L ] Load Saved Game\n [ H ] Help\nMe: ', (input) => {
    const hotkey = input.toLowerCase();
    if (hotkey === hotkeys[0]) {
        // New game
        console.log('New game created');
    } else {
        if (hotkey === hotkeys[1]) {
            // Load saved game
            console.log('Returned list of saves');
        } else {
            if (hotkey === hotkeys[2]) {
                console.log('Here is help');
            };
        };
    }; 
});

