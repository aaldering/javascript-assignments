let greet, readline, rl;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

greet = function(name){
  let print = name + " du bist ein Schnitzel!" ;
    console.log(print);
};

rl.question("Wie heißt du? ", greet)