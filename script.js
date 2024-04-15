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
    return num1 / num2;
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
            return divide(num1, num2);
    }
}

let firstNumber;
let operator;
let secondNumber;

const displayScreen = document.querySelector('#calculator-screen');
console.log(displayScreen);

let displayValue = displayScreen.textContent;
function displayOnScreen(content)
{
    displayScreen.textContent += content;
    displayValue = parseInt(displayScreen.textContent);
}

const numericButtons = Array.from(document.querySelectorAll('#calculator-row button#num-button'));
console.log(numericButtons);

numericButtons.map((obj) => obj.addEventListener("click", () => displayOnScreen(obj.textContent)));

function operatorButton(typeOfOperator)
{
    operator = typeOfOperator;
    firstNumber = displayValue;
    displayScreen.textContent = "    ";
    console.log(operator);
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
    displayScreen.textContent = operate(firstNumber, operator, secondNumber);
}

const equalsButton = document.querySelector('button#equals-button');
equalsButton.addEventListener("click", () => equals());