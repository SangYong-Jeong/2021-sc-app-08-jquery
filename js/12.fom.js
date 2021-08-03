/**************************** Global ***************************/  
var scores = [
	{ id: 1, name: '홍길동', kor: 95, eng: 80, math: 75 },
	{ id: 2, name: '홍길순', kor: 88, eng: 95, math: 85 },
	{ id: 3, name: '홍길만', kor: 90, eng: 85, math: 85 }
];


/**************************** Function Init ***************************/  
function init() {
	// for(var i=0; i<scores.length; i++) { createRow(scores[i]); }
	for(var i in scores) { createRow(scores[i]); }
	// for(var v of scores) { createRow(v); } // IE11 미지원
	// scores.forEach(function(v, i) { createRow(v); })
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
	var id = $('.score-tbody tr').length +1;
	var name = data.name;
	var kor = data.kor;
	var eng = data.eng;
	var math = data.math;
	var tot = total(kor, eng, math);
	var avg = average(kor, eng, math);
	var html = '<tr>';
	html += '<td>'+id+'</td>';
	html += '<td>'+name+'</td>';
	html += '<td>'+kor+'</td>';
	html += '<td>'+eng+'</td>';
	html += '<td>'+math+'</td>';
	html += '<td>'+tot+'</td>';
	html += '<td>'+avg+'</td>';
	html += '</tr>';
	$(html).prependTo('.score-tbody');
}

/**************************** Event Callback ***************************/  
function onShowForm() {
	$('.score-form').stop().slideDown(300, function() {
		document.scoreForm.name.focus();
	});
}

function onSubmit() { // 검증(Validation)
	var f = document.scoreForm;
	var name = f.name.value.trim();
	var kor = f.kor.value;
	var eng = f.eng.value;
	var math = f.math.value;
	if(name.length < 2) {
		alert('이름을 입력하세요.');
		f.name.focus();
		return false;
	}
	if(kor < 0 || kor > 100) {
		alert('점수가 올바르지 않습니다.');
		f.kor.focus();
		return false;
	}
	if(eng < 0 || eng > 100) {
		alert('점수가 올바르지 않습니다.');
		f.eng.focus();
		return false;
	}
	if(math < 0 || math > 100) {
		alert('점수가 올바르지 않습니다.');
		f.math.focus();
		return false;
	}
	return true;
}


/**************************** Event Init ***************************/  
$('.bt-show').click(onShowForm);

init();

