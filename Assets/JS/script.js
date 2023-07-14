const display = document.getElementById('display');
let chars = '';


function addChar(charValue) {
    console.log(charValue);
    if (charValue != '') {
        chars+=charValue;
        display.value = chars;
    } else {
        alert ('Por favor ingrese un valor!');
    }
}

function clearDisplay() {
    chars = '';
    display.value = '';
}

function clearChar() {
    chars = chars.slice(0, chars.length - 1);
    display.value = chars;
}

function calculateResult() {
    chars = eval(chars);
    display.value = chars;
}