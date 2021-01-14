let slideOne = document.querySelector('.slide-one');
let slideTwo = document.querySelector('.slide-two');
let slideThree = document.querySelector('.slide-three');
let slideArrowLeft = document.querySelector('.arrow-slide-left');
let slideArrowLeft1 = document.querySelector('.arrow-slide-left1');
let slideArrowRight = document.querySelector('.arrow-slide-right');
let slideArrowRight1 = document.querySelector('.arrow-slide-right1');

slideArrowLeft.onclick = () => {
	slideOne.style.display = "inline"
	slideTwo.style.display = "none"
	slideThree.style.display = "none"
	slideArrowRight.style.display = "inline"
	slideArrowRight1.style.display = "none"
}

slideArrowRight.onclick = () => {
	slideOne.style.display = "none"
	slideTwo.style.display = "inline"
	slideArrowRight.style.display = "none"
	slideArrowRight1.style.display = "inline"
}

slideArrowRight1.onclick = () => {
	slideTwo.style.display = "none"
	slideThree.style.display = "inline"
	slideArrowLeft.style.display = "none"
	slideArrowLeft1.style.display = "inline"
}

slideArrowLeft1.onclick = () => {
	slideThree.style.display = "none"
	slideTwo.style.display = "inline"
	slideArrowLeft1.style.display = "none"
	slideArrowLeft.style.display = "inline"
}