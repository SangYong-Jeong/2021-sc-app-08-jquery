// startNumber: 난수의 시작, 수 count: 난수의 갯수 
function random(startNumber, count) {
	return Math.floor( Math.random() * count ) + startNumber;
}