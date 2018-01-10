let number, readline, rl;

let guesser = Math.floor(Math.random() *101);

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);


    guess = function (number) {

        if (number < guesser) {
            console.log("higher!");
            rl.question("Guess a number: ", guess)
        } else if (number > guesser) {
            console.log("lower!");
            rl.question("Guess a number: ", guess)
        } else {
            console.log("You've guessed it!")
        }
    };


rl.question("Guess a number: ", guess);