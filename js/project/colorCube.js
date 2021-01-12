let colorInput = document.querySelector('.color-input');

colorInput.onchange = () => {
	let  colorCube = document.querySelector('.color-cube');
	colorCube.style.backgroundColor = colorInput.value;
}