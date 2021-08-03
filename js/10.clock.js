var d = new Date(); // 객체의 Instance

var nowDate = d.getFullYear() + '-' + zp(d.getMonth() +1) + '-' + zp(d.getDate()) + ' ' + zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());  
console.log(nowDate); // ISO 시간표기

setInterval(onInterval, 1000);
function onInterval() {
	/*
	var yoil = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var d = new Date();
	var date = d.getFullYear() + '-' + zp(d.getMonth() +1) + '-' + zp(d.getDate());  
	var time = zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());  
	document.querySelector('.date-wp').innerHTML = date+ '. ' + yoil[d.getDay()];
	document.querySelector('.time-wp').innerHTML = time;
	*/
	document.querySelector('.date-wp').innerHTML = moment().format('YYYY-MM-DD. ddd');
	document.querySelector('.time-wp').innerHTML = moment().format('HH:mm:ss');
	document.querySelector('.timestamp-wp').innerHTML = new Date().getTime();
}