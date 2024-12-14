// Gets the display element where user input and results are shown.
const display = document.getElementById('display');

/**
 * Appends a value to the calculator's display.
 * @param {string} value - The value to append (e.g., a number or operator).
 */
function appendValue(value) {
    display.value += value;
}

/**
 * Clears all content from the calculator's display.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Evaluates the expression entered in the display and shows the result.
 * If the expression is invalid, displays 'Error'.
 */
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
