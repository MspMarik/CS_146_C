var result = 0;
var currentOp = '';
var buffer = 0;
var numString = '';
setDisplay('0');

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
	result = 0;
	currentOp = '';
	buffer = 0;
	numString = '';
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
	return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
	numString += num.toString();
	result = parseInt(numString);
	if (result <= 999999999 && result >= -999999999) {
		setDisplay(numString);
	} else if (result > 999999999) {
		result = 999999999;
		setDisplay('999999999');
	} else if (result < -999999999) {
		result = -999999999;
		setDisplay('-999999999');
	}
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
	if (result !== 0) {
		numString = '';
		setDisplay('0');
		currentOp = op;
		buffer = result;
		result = 0;
	} else {
		currentOp = op;
	}
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
	if (currentOp == '+') {
		result = Math.floor(buffer + result);
		setDisplay(result);
	} else if (currentOp == '-') {
		result = Math.floor(buffer - result);
		setDisplay(result);
	} else if (currentOp == '*') {
		result = Math.floor(buffer * result);
		setDisplay(result);
	} else if (currentOp == '/') {
		if (result == '0' && buffer == '0') {
			result = getResult();
			buffer = 0;
			setDisplay('ERROR');
			return 'ERROR';
		}
		result = Math.floor(buffer / result);
		setDisplay(result);
	} else if (result > 999999999) {
		setDisplay('999999999');
		return 999999999;
	} else if (result < -999999999) {
		setDisplay('-999999999');
		result = -999999999;
	}
}
