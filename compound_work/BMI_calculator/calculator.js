let calculationDone = false;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (calculationDone) {
        calculationDone = false;
        display.value = "";
    }

    // display.value = display.value.replace(/Math error/g, '');
    display.value = display.value.replace(/undefined/g, '');
    display.value = display.value.replace(/Infinity/g, '');
    display.value = display.value.replace(/NaN/g, '');

    display.value += value;
}

function appendDot() {
    const currentDisplay = document.getElementById('display').value;
    const match = currentDisplay.match(/[\d.]+$/);

    if (match && !match[0].includes('.')) {
        document.getElementById('display').value += '.';
    } else if (match == null) {
        document.getElementById('display').value += '.';
    }
}

function calculate() {
    const display = document.getElementById('display');

    display.value = display.value.replace(/(-)(\d+(\.\d+)?)/g, '-1*$2');

    const openParenthesesCount = (display.value.match(/\(/g) || []).length;
    const closeParenthesesCount = (display.value.match(/\)/g) || []).length;
    const missingParenthesesCount = openParenthesesCount - closeParenthesesCount;

    if (missingParenthesesCount > 0) {
        display.value = display.value + ')'.repeat(missingParenthesesCount);
    }

    // Replace 2(2) with 2*(2)
    display.value = display.value.replace(/(\d)\(/g, '$1*(');

    // Replace ^ with **
    display.value = display.value.replace(/\^/g, '**');

    try {
        display.value = eval(display.value);
        calculationDone = display.value === "0";
    } catch (error) {
        display.value = 'Math error';
        calculationDone = true;
    }
}
