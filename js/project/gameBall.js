let gameZone = document.querySelector('.gameZone');
let gameBall = document.querySelector('.gameBall');
let positionBallX = 0;
let positionBallY = 0;
let gameZoneClick = false;
let body = document.querySelector('body');

gameZone.onclick = () => {
	document.onkeypress = (event) => {
		if (event.keyCode == 97) {
			positionBallX += 10;
		} else if (event.keyCode == 100) {
			positionBallX -= 10;
		}
		gameBall.style.right = positionBallX + 'px';

		if (event.keyCode == 115) {
			positionBallY += 10;
		} else if (event.keyCode == 119) {
			positionBallY -= 10;
		}
		gameBall.style.top = positionBallY + 'px';
}
	gameZoneClick = true;
}

body.onclick = () => {
	if (!gameZoneClick) {
		document.onkeypress = undefined;
	}
	gameZoneClick = false;
}
