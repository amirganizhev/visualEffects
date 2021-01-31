let keyboardButtonForm = document.querySelector('.keyboardButtonForm');
let keyboardButtonName = document.querySelector('.keyboardButtonName');
let keyCode = document.querySelector('.keyCode');
let shiftPressed = document.querySelector('.shiftPressed');

keyboardButtonForm.onkeypress = (event) => {
	
	if (event.keyCode >= 97 && event.keyCode <= 122) {
		keyboardButtonName.innerHTML = 'Вы ввели маленькую английскую букву';
	} else if (event.keyCode >= 65 && event.keyCode <= 90) {
		keyboardButtonName.innerHTML = 'Вы ввели большую английскую букву';
	} else if (event.keyCode >= 1072 && event.keyCode <= 1103) {
		keyboardButtonName.innerHTML = 'Вы ввели маленькую русскую букву';
	} else if (event.keyCode >= 1040 && event.keyCode <= 1071) {
		keyboardButtonName.innerHTML = 'Вы ввели большую русскую букву';
	} else if (event.keyCode >= 48 && event.keyCode <= 57) {
		keyboardButtonName.innerHTML = 'Вы ввели цифру';
	} else {
		keyboardButtonName.innerHTML = 'Вы ввели что то другое';
	}

	keyCode.innerHTML = event.keyCode;

		if (event.shiftKey == true) {
			shiftPressed.innerHTML = 'Да';
		} else {
			shiftPressed.innerHTML = 'Нет';
		}
}

