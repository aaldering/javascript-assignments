let readline, rl, newCard, qSetSymbol, symbol, answer, qCounter, cardsQuestions, cardsAnswers, qSetAnswer, askQuestionsOrExit, askQuestions, userAnswer, guesser;
qCounter = 0;
cardsQuestions =[];
cardsAnswers = [];
guesser = 0;
readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

qSetNewCard = function (newCard) {
    if(newCard === "y"){
        rl.question("Which symbol do you want for this card? \n", qSetSymbol);

    } else {
        rl.question("Exit of ask Questions? (e/q) \n", askQuestionsOrExit);
    }
};

qSetSymbol = function (symbol) {
    cardsQuestions[qCounter] = symbol;
    rl.question("Set answer \n", qSetAnswer);
};

qSetAnswer = function (answer) {
    cardsAnswers[qCounter] = answer;
    qCounter++;
    rl.question("New flashcard? (y/n) \n" , qSetNewCard);
};

askQuestionsOrExit = function (eOrQ) {
        if(eOrQ === "e"){
            console.log("K thnx bye");
            process.exit();
        } else {
            askQuestions();
        }
};

askQuestions = function () {
    guesser = (Math.floor(Math.random() *qCounter));
    console.log("Front: \n");
    console.log(cardsQuestions[guesser]);
    rl.question("Your answer: \n", userAnswer)
};

userAnswer = function (ansUser) {
    if(ansUser === cardsAnswers[guesser]){
        console.log("Correct!");
        rl.question("Exit of ask Questions? (e/q) \n", askQuestionsOrExit);
    } else {
        console.log("Wrong! The correct answer is: " + cardsAnswers[guesser]);
        askQuestions();
    }
};

rl.question("New flashcard? (y/n) \n" , qSetNewCard);
