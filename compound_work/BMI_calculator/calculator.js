let errorFound = false;
let zeroResultFound = false;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (errorFound) {
        errorFound = false;
        display.value = "";
    }

    // display.value = display.value.replace(/Math error/g, '');
    display.value = display.value.replace(/undefined/g, '');
    display.value = display.value.replace(/Infinity/g, '');
    display.value = display.value.replace(/NaN/g, '');

    display.value += value;

    if (zeroResultFound){
        zeroResultFound = false;
        display.value = display.value.replace(/^0+(?![.\/()+%^X-])/g, '0');
    }
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

    // remove all leading 0s unless "." found after 0s
    if (display.value.length >= 1){
        display.value = display.value.replace(/^0+(?![.\/()+%^X-])/g, '');
    }

    // Replace -digit as -1 * digit, otherwise some ^ operation fails
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

    // Replace X with *
    display.value = display.value.replace(/\X/g, '*');

    // Replace empty dot with .0
    display.value = display.value.replace(/\.(?!\d)/g, ".0");

    try {
        display.value = eval(display.value);
        if (display.value === "0") zeroResultFound = true;
    } catch (error) {
        display.value = error.toString();
        errorFound = true;
    }
}
