/**************************** Global ***************************/  
var scores = [
	{ id: 1, name: '홍길동', kor: 95, eng: 80, math: 75 },
	{ id: 2, name: '홍길순', kor: 88, eng: 95, math: 85 },
	{ id: 3, name: '홍길만', kor: 90, eng: 85, math: 85 }
];


/**************************** Function Init ***************************/  
function init() {
	for(var i=0; i<scores.length; i++) {
		createRow(scores[i]);
	}
}

function total() { // 가변인자
	for(var i=0, sum=0; i<arguments.length; i++) {
		sum += Number(arguments[i]);
	}
	return sum;
}

function average() {
	for(var i=0, sum=0; i<arguments.length; i++) {
		sum += Number(arguments[i]);
	}
	return (sum/arguments.length).toFixed(2);
}

function createRow (data) {
	var name = data.name;
	var kor = data.kor;
	var eng = data.eng;
	var math = data.math;
	var tot = total(kor, eng, math);
	var avg = average(kor, eng, math);
}

/**************************** Event Callback ***************************/  
function onShowForm() {
	$('.score-form').stop().slideDown(400);
}


/**************************** Event Init ***************************/  
$('.bt-show').click(onShowForm);

init();

