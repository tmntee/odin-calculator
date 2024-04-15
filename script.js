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
    return Math.round(num1 / num2);
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
            if (num2 === 0)
            {
                return 'erm impossible';
            }
            return divide(num1, num2);
    }
}

let firstNumber;
let operator;
let secondNumber;
let isDisplayingResult;

const displayScreen = document.querySelector('#calculator-screen');

let displayValue = displayScreen.textContent;
function displayOnScreen(content)
{   
    if (isDisplayingResult)
    {
        displayScreen.textContent = "";
        isDisplayingResult = false;
    }
    displayScreen.textContent += content;
    displayValue = parseInt(displayScreen.textContent);
}

const numericButtons = Array.from(document.querySelectorAll('#calculator-row button#num-button'));

numericButtons.map((obj) => obj.addEventListener("click", () => displayOnScreen(obj.textContent)));

function operatorButton(typeOfOperator)
{
    operator = typeOfOperator;
    firstNumber = displayValue;
    displayScreen.textContent = "";
    console.log(firstNumber);
}

const operatorButtons = Array.from(document.querySelectorAll('button#operator-button'));

operatorButtons[0].addEventListener("click", () => operatorButton("add"));
operatorButtons[1].addEventListener("click", () => operatorButton("subtract"));
operatorButtons[2].addEventListener("click", () => operatorButton("multiply"));
operatorButtons[3].addEventListener("click", () => operatorButton("divide"));

function equals()
{   
    secondNumber = displayValue;
    displayScreen.textContent = operate(firstNumber, operator, secondNumber)
    displayValue = parseInt(displayScreen.textContent);
    isDisplayingResult = true;
    console.log(secondNumber);
}

const equalsButton = document.querySelector('button#equals-button');
equalsButton.addEventListener("click", () => equals());

function resetCalculator()
{
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayScreen.textContent = '';
    displayValue = '';
}
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => resetCalculator());