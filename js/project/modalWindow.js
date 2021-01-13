let modalButton = document.querySelector('.modal-button');
let modalWindow = document.querySelector('.modal-window');
let closeModalWindow = document.querySelector('.closeModalWindow');

modalButton.onclick = () => {
	modalWindow.style.display = "block";
}

closeModalWindow.onclick = () => {
	modalWindow.style.display = "none";
}
