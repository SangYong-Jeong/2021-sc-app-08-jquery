/* $('.bt-on').on('click', function() {
	console.log('ON');
});

for(var i=0; i<document.getElementsByClassName('bt-on').length; i++) {
	document.getElementsByClassName('bt-on')[i].addEventListener('click', function() {
		console.log('ON');
	})
}

for(var i=0; i<document.querySelectorAll('.bt-on').length; i++) {
	document.querySelectorAll('.bt-on')[i].addEventListener('click', function() {
		console.log('ON');
	})
}

*/

/*
ES5/ES6/jQuery 선택자
document.getElementById('idName') -> html
document.getElementsByClassName('className') -> Array[html, html]
document.getElementsByTagName('tagName') -> Array[html, html]
document.querySelector('.w100') -> html (맨 처음 나오는 element)
document.querySelectorAll('.w100') -> Array[html, html]
$('.w100') -> jQuery


document.getElementById('a').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML

( $('#a li:nth-child(2)')[0].innerHTML )

( document.querySelectorAll('#a li')[1].innerHTML ) 
*/
/* 
js와 jQuery 이벤트 등록
document.querySelector('.bt-on').addEventListener('click', function() {});
$('.bt-on').on('click', function() {}); 


console.log(this);
document.querySelector('.bt-off').addEventListener('click', function() {
this는 이벤트 대상을 가리킨다(순수JS, Dom Element)
console.log(this); 
this.style.display = 'none';
	$(this).hide();
});

$('.bt-on').on('click', function() {
this는 이벤트 대상을 가리킨다(순수JS, Dom Element)
console.log(this);
this.style.display = 'none';
	$(this).hide();
});
*/

// attribute: HTML의 속성
$('.bt-on').on('click', function(){
	// $('.img-wrap > img')[0].src = '../img/on.png'
	$('.img-wrap > img').attr('src', '../img/on.png')
	$('.bt-on').hide();
	$('.bt-off').show();
});

$('.bt-off').on('click', function(){
  // $('.img-wrap > img')[0].src = '../img/off.png'
	$('.img-wrap > img').attr('src', '../img/off.png')
	$('.bt-on').show();
	$('.bt-off').hide();
});