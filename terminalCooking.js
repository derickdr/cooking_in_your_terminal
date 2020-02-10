/* This project is inspired by Cooking Adventures, which is a catering game wherein you serve customers customized orders 
   with the goal of achieving x gross profit under a time limit. There are many scenarios with different types of cuisine
   and many different ways to prepare food, and your time management / reflexes are very often tested. You are also able 
   to upgrade your kitchen, cookware, product, and even your kitchen. There are also unlockable outfits and the like that
   I will not be implementing in this terminal edition. */



function welcome() {
    console.log('Welcome to Terminal Cook!');
    console.log('[ N ] New Game | [ L ] Load Saved Game | [ H ] Help');
};

const input = process.argv[2].toString().toLowerCase(); 

function initializeGame(input) {
    // New game
    if (input === 'N') {
        // Create csv file with saveName in game directory
        console.log('Confirm new game?');
        console.log('[ Y ] / [ N ]');
    } else {
        if (input === 'L') {
            
        };
    };
};