let year, counter, readline, rl;
readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);
counter = 3;
leapyear = function (year) {
  if(counter > 0) {
      if (year % 400 === 0 && year % 100 === 0) {
          console.log(year + " is a leapyear!");
          counter--;
      } else if (year % 4 == 0 && year % 100 != 0) {
          console.log(year + " is a leap year!");
          counter--;
      } else {
          console.log(year + " is not a leapyear...");
          counter--;
      }
      if (counter>0){
          rl.question("Give me a year!", leapyear);
      } else {
          console.log("Goodbye!");
      }
  }
};

rl.question("Give me a year!" , leapyear);
