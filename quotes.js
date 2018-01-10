const QUOTES = [
    ["galileo", "eppur si muove"],
    ["archimedes", "eureka!"],
    ["erasmus", "in regione caecorum rex est luscus"],
    ["socrates", "I know nothing except the fact of my ignorance"],
    ["rené descartes", "cogito, ergo sum"],
    ["sir isaac newton", "if I have seen further it is by standing on the shoulders of giants"]
];

let newQuotes=[];
let name ="";
let quote ="";
let qouteCap ="";
let dot = ".";
let exclamationMark = "!";

selectQuote = function(){
    let date = new Date();
    return (date.getDate() % QUOTES.length)-1
}

let firstletterCapitalize = function () {
    for(let i = 0; i<QUOTES.length; i++){
        name = QUOTES[i][0];
        quote = QUOTES[i][1];
        name = capitalizeNames(name);
        name = name.charAt(0).toUpperCase() + name.substr(1);
        qouteCap = quote.charAt(0).toUpperCase() + quote.substr(1);
        if(qouteCap.slice(-1) != dot && qouteCap.slice(-1) != exclamationMark){
            qouteCap = qouteCap+dot;
        }
        newQuotes[newQuotes.length] = [name,qouteCap];
    }
    newQuotes;
};

let capitalizeNames = function () {
    for(let i = 0; i< name.length; i++){
        if(name.charAt(i)=== " "){
            name = name.substr(0, i+1) + name.charAt(i+1).toUpperCase() +name.substr(i+2);
        }

    }
    return name;
};

firstletterCapitalize();
console.log('"' + newQuotes[selectQuote()][1] + '"' + ' -- ' + newQuotes[selectQuote()][0]);
