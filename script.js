function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{   
    let quotient = num1/num2;

    if (quotient % 1 === 0)
    {
        return quotient;
    }
    else
    {
        return quotient.toFixed(3);
    }
}

function operate(num1, op, num2)
{
    switch (op)
    {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            if (num1 === 0 || num2 === 0)
            {
                alert('impossible!');
                return num2;
            }
            return divide(num1, num2);
    }
}

//pseudo code
// enter first number
// save first number
// pick an operator
// enter second number
// save second number
// press equals or an operator
// -> if operator is pressed, equals is 

let firstNumber;
let operator;
let secondNumber;

let enteringFirstNumber = false;
let enteringSecondNumber = false;
let firstDigit = true;

const displayScreen = document.querySelector('#calculator-screen');

function displayOnScreen(content)
{   
    if (!enteringFirstNumber && !enteringSecondNumber)
    {
        enteringFirstNumber = true;
    }

    if (firstDigit)
    {
        displayScreen.textContent = '';
        firstDigit = false;
    }

    displayScreen.textContent += content;
    displayValue = parseInt(displayScreen.textContent);

    if (enteringFirstNumber && !enteringSecondNumber)
    {
        firstNumber = displayValue;
    } 
    else if (!enteringFirstNumber && enteringSecondNumber)
    {   
        secondNumber = displayValue;
    }
    console.log(`entering the first number: ${enteringFirstNumber} | entering the second number: ${enteringSecondNumber}`);
    console.log(`first number: ${firstNumber} | second number: ${secondNumber}`);
}

const numericButtons = Array.from(document.querySelectorAll('#calculator-row button#num-button'));

numericButtons.map((obj) => obj.addEventListener("click", () => displayOnScreen(obj.textContent)));

function operatorButton(typeOfOperator)
{
    if (enteringSecondNumber)
    {
        equals();
    }

    operator = typeOfOperator;

    if (enteringFirstNumber)
    {
        enteringFirstNumber = false;
        enteringSecondNumber = true;
        firstDigit = true;
    }

}

const operatorButtons = Array.from(document.querySelectorAll('button#operator-button'));

operatorButtons[0].addEventListener("click", () => operatorButton("add"));
operatorButtons[1].addEventListener("click", () => operatorButton("subtract"));
operatorButtons[2].addEventListener("click", () => operatorButton("multiply"));
operatorButtons[3].addEventListener("click", () => operatorButton("divide"));


// equals button functionality
function equals()
{   
    displayScreen.textContent = operate(firstNumber, operator, secondNumber);
    
    operator = '';
    secondNumber = '';
    firstDigit = true;
    enteringFirstNumber = true;
    enteringSecondNumber = false;
    firstNumber = parseInt(displayScreen.textContent);
}

const equalsButton = document.querySelector('button#equals-button');
equalsButton.addEventListener("click", () => equals());


// clear button functionality
function resetCalculator()
{
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayScreen.textContent = '';
    displayValue = '';
    enteringFirstNumber = false;
    enteringSecondNumber = false;
    firstDigit = true;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => resetCalculator());

// left off 4/18/2024 12:59 am
// calculator works completely, left off on extra credit section
// on the odinproject website
// do all extra credits, and then some
// do each extra cred on a branch then merge if satisfactory
// also refactor code. if you see anything that is multiple, make it a function
// ok love u goodnight