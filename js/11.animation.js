/******************** 전역설정 ********************/


/******************** 함수선언 ********************/


/******************** 이벤트콜백 ********************/
function onFade(_el, chk) {
	var el = document.querySelector(_el);
	var opacity = getComputedStyle(el).getPropertyValue('opacity');
	if(chk === 'show') {
	}
	else {

	}
}

function onShow() {
	var interval;
	var opacity = 1;
	interval = setInterval(onFade, 1000, '.box', 'show')
}

function onHide() {

}

/******************** 이벤트등록 ********************/
document.querySelector('.bt-show').addEventListener('click', onShow);
document.querySelector('.bt-hide').addEventListener('click', onHide);

