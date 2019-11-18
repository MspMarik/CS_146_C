var result = 0;
var currentOp = '';
var buffer = 0;
var equalsPressed = false;
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
		result = buffer + result;
	}
	if (currentOp == '-') {
		result = buffer - result;
	}
	if (currentOp == '*') {
		result = buffer * result;
	}
	if (currentOp == '/') {
		if (result == '0' && buffer == '0') {
			result = 0;
			buffer = 0;
			return 'ERROR';
		}
		result = parseInt(buffer / result);
	}

	if (result > 999999999) {
		return 999999999;
	}

	if (result < -999999999) {
		return -999999999;
	}
	return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
	if (document.getElementById('output').innerText == '0' || equalsPressed) {
		if (currentOp) {
			buffer = result;
			result = 0;
		}
		equalsPressed = false;
		setDisplay(num);
	} else {
		if (document.getElementById('output').innerText.length <= 8) {
			setDisplay(document.getElementById('output').innerText + num);
		}
	}
	result = parseInt(document.getElementById('output').innerText);
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
	setDisplay('0');
	currentOp = op;
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
	if (currentOp) {
		let a = result;
		setDisplay(getResult());
		buffer = result;
		result = a;
		equalsPressed = true;
	}
}
