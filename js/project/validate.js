let englishLetters = document.querySelector('.english-letters');
let russianLetters = document.querySelector('.russian-letters');
let numerals = document.querySelector('.numerals');

englishLetters.onkeypress = (event) => {
	if (event.keyCode >= 97 & event.keyCode <= 122) {
		return true;
	} else if (event.keyCode >= 65 & event.keyCode <= 90) {
		return true;
	} else {
		return false;
	}
}

russianLetters.onkeypress = (event) => {
	if (event.keyCode >= 1072 & event.keyCode <= 1103) {
		return true;
	} else if (event.keyCode >= 1040 & event.keyCode <= 1071) {
		return true; 
	} else {
		return false;
	}
}

numerals.onkeypress = (event) => {
	if (event.keyCode >= 48 & event.keyCode <= 57) {
		return true;
	} else {
		return false;
	}
}