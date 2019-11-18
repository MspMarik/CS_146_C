var result = 0;
var currentOp = '';
var buffer = 0;
setDisplay('0');

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
	result = 0;
	currentOp = '';
	buffer = 0;
	setDisplay('0');
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
	document.getElementById('output').innerText = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
	if (currentOp == '+') {
		result += buffe;
	}
	if (currentOp == '-') {
		result -= buffer;
	}
	if (currentOp == '*') {
		result *= buffer;
	}
	if (currentOp == '/') {
		if (result == '0' && buffer == '0') {
			return 'ERROR';
		}
		result /= buffer;
	}
	return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
	if (document.getElementById('output').innerText == '0') {
		setDisplay(num);
	} else {
		if (parseInt(document.getElementById('output').innerText) < 999999999) {
			setDisplay(document.getElementById('output').innerText + num);
		}
	}
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
	buffer = result;
	result = 0;
	setDisplay(result);
	currentOp = op;
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
	if (currentOp) {
		setDisplay(getResult());
	}
}
