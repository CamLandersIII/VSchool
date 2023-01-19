
var readlineSync = require("readline-sync");

var firstNumber = readlineSync.questionInt("Please enter your first number");

var secondNumber = readlineSync.questionInt("Please enter your second number");
var enterOperator = readlineSync.question("Please enter the operator you wish to use");


function addTwoNumbers(firstNumber, secondNumber){
    var sum = firstNumber + secondNumber;
    console.log(sum);
}

function subtractTwoNumbers(firstNumber, secondNumber){
    var subtract = firstNumber - secondNumber;
    console.log(subtract); 
}

function multiplyTwoNumbers(firstNumber, secondNumbers){
    var multiply = firstNumber * secondNumber;
    console.log(multiply);
}

function divideTwoNumbers(firstNumber, secondNumber){
    var divide = firstNumber / secondNumber;
    console.log(divide);
}

if (enterOperator === "+") { addTwoNumbers(firstNumber,secondNumber); process.exit(0);
    }else if(enterOperator === "-"){  subtractTwoNumbers(firstNumber,secondNumber);process.exit(0);
    }else if(enterOperator === "*"){ multiplyTwoNumbers(firstNumber, secondNumber);process.exit(0);
    }else if(enterOperator === "/"){ divideTwoNumbers(firstNumber, secondNumber);process.exit(0);
    }else{ console.log("unknown operator, please try again"); process.exit(1);
}

