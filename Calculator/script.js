let currentInput = '';
let calculation = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    calculation = '';
    document.getElementById('display').value = '';
}

function calculate() {
    calculation = currentInput;
    let result = eval(calculation);
    document.getElementById('display').value = result;
    currentInput = result.toString();
    resultDisplayed = true;
}
