//Madlib problem


function madLib(var1, var2){
    let firstName = var1;
    let subject = var2;
    let sentence = `${firstName}'s favorite subject in school is ${subject}`;
    
    return sentence;
}

let firstName = 'Rodger';
let rSubject = 'Math';
madLib('Amy', 'Math');

//console.log(answerMadlib);

function tipAmount(var1, var2){
    let theAmount = 0;
    if(var2 === 'good'){
        theAmount = var1 * .20;
    }else if(var2 === 'fair'){
        theAmount = var1 * .15;
    }else if (var2 === 'bad'){
        theAmount = var1 * .10;
    }else{
        theAmount = 'You have not enter a correct rating';
    }
    return theAmount;
}

let tipTotal = tipAmount(100, 'good');
//console.log(tipTotal);

function billAmount(var1, var2){
    let amount = var1 + var2;
    return amount;
}

let totalBillWithTip = billAmount(100, tipTotal);
//console.log(totalBillWithTip);

function printNumberWithWhileLoop(var1, var2, var3){
    let i = var1;
    let pNumber = '';
    let statement = '';

    while(i <= var2){
        pNumber += i;
        pNumber += '\n'; 
        i++; 
        if(i == var2){
            statement = var3;

        }
    }
    pNumber += statement;
    return pNumber;
}

let numberWithWhileLoopFunction = printNumberWithWhileLoop(1, 10,'This is the last point');
//console.log(numberWithWhileLoopFunction);

function printNumberWithForLoop(var1, var2){
    let pNumber = '';
    for(i = var1; i <= var2; i++){
        pNumber += i;
        pNumber += '\n';
    }
    return pNumber;
}

let numberWithForLoop = printNumberWithForLoop(1, 10);

//console.log(numberWithForLoop);

function printSquare(var1){
    let astrick = '';
    let breakline = '\n';
    let square = '';

    for(i = 1; i <= var1; i++){
        astrick += '*';
        if(5 == '5'){
            for(n = 1; n <= 5; n++){
                square += astrick + breakline;
            }
        }
    }
    return square;
}

let makeSquare = printSquare(5);
//console.log(makeSquare);

//Empty box
function printbox(var1, var2){
    let topAndBottom = '';
    let sides = '';
    let square = '';

    for(i = 1; i <= var1; i++){
        topAndBottom += '-';
        if(i == var1){
            topAndBottom += '\n';
            for(x = 1; x <= var2; x++){
                for(n = 1; n <= var1; n++){
                    if(n == 1){
                        sides += '|';
                    }else if(n == var1){
                        sides += '|' + '\n';
                    }else{
                        sides += ' ';
                    }
                }
            }
        }

    }

    square += topAndBottom + sides + topAndBottom;
    return square;
}

let makeEmptyBox = printbox(5,5);
//console.log(makeEmptyBox);

function printBanner(var1){
    let varLength = var1.length + 4
    let border = '';
    let middleBanner = '';
    let banner = '';
    let dash = '-';

    for(i = 1; i <= varLength; i++){
        border += dash;
        if(i == varLength){
            border += '\n';
        }

    }
    middleBanner = dash + ' ' + var1 + ' ' + dash + '\n';
    banner = border + middleBanner + border;
    return banner;
}

let makeBanner = printBanner('Rodger');
console.log(makeBanner);

