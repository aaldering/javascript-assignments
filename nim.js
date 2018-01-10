let matches, readline, rl;
readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);
matches = 11;

nim = function (number) {
    if(number <1 || number >4 ){
        console.log("Please pick a number between 1 and 4");
        rl.question("How much do you take? \n", nim)
    } else {
        matches -= number;
        if (matches > 0) {
            console.log("There are " + matches + " matches \n");
            rl.question("How much do you take? \n", nim)
        } else if (matches < 0){
            console.log("You've taken more than you should, there are now " + matches + " matches. \n" + "You've lost and Frank is a bratwurst!");
        } else {
            console.log("You have won and Frank is a sparerib!");
        }
    }
};
rl.question("There are " + matches + " matches \n" + "How much do you take? \n" , nim);
