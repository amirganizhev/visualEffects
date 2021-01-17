let changeFigure = document.querySelector('.change-figure');
let buttonChangeFigure = document.querySelector('.button-change-figure');

buttonChangeFigure.onclick = () => {
	changeFigure.classList.toggle('change-figure-one');
	changeFigure.classList.toggle('change-figure-two');
}