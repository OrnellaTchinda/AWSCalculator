let getNum1 = document.getElementById('num1');
let getNum2 = document.getElementById('num2')

function add() {
    const num1 = getNum1.valueAsNumber;
    const num2 = getNum2.valueAsNumber;
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const num1 = getNum1.valueAsNumber;
    const num2 = getNum2.valueAsNumber;
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const num1 = getNum1.valueAsNumber;
    const num2 = getNum2.valueAsNumber;
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = getNum1.valueAsNumber;
    const num2 = getNum2.valueAsNumber;
    if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
        displayResult('Invalid input or division by zero');
    } else {
        const result = num1 / num2;
        displayResult(result);
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Result: ' + result;
}
