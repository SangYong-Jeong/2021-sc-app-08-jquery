$('.bt1').on('click', function(){
	// 시간을 안 주면 바로 없어짐(display: none;)
	// 시간을 주면 주어진 시간동안 width, height, opacity가 줄어들면서 width, height, opacity가 0이 되면 사라짐(display: none;)
	$('.box').stop().hide(1000); 
});

$('.bt2').on('click', function(){
	$('.box').stop().show(1000); 
});

$('.bt3').on('click', function(){
	$('.box').stop().fadeOut('slow'); // "slow"(600), "normal"(400), "fast"(200), ms 
});

$('.bt4').on('click', function(){
	$('.box').stop().fadeIn('fast'); 
});

$('.bt5').on('click', function(){
	$('.box').stop().slideUp(1000); 
});

$('.bt6').on('click', function(){
	$('.box').stop().slideDown(1000); 
});

$('.navi').on('mouseenter', function() {
	// $(this).children('.sub-wp').stop().slideDown(1000); // 자식선택자
	$(this).find('.sub-wp').stop().slideDown(200); // 자손선택자
})
$('.navi').on('mouseleave', function(){
	$(this).find('.sub-wp').stop().slideUp(200);
})