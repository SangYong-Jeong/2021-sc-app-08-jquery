var foods = [
	{name:'Popcicle', src:'../img/f1.jpg'},
	{name:'Salmon', src:'../img/f2.jpg'},
	{name:'Sandwitch', src:'../img/f3.jpg'},
	{name:'Steak', src:'../img/f4.jpg'},
	{name:'Wine', src:'../img/f5.jpg'},
	{name:'Cherry', src:'../img/f6.jpg'},
	{name:'Croissant', src:'../img/f7.jpg'}
];

for(var i=0, html; i<foods.length; i++) {
	html  = '<li class="list">';
	html += '<img src="'+foods[i].src+'" class="w100 thumb" alt="'+foods[i].name+'">';
	html += '</li>';
	document.querySelector('.list-wrap').innerHTML += html
}

var big = document.querySelector('.stage-wrap .big');
var thumbs = document.querySelectorAll('.list-wrap .thumb');
var lists = document.querySelectorAll('.list-wrap .list');
var title = document.querySelector('.stage-wrap .name');
for(var i=0; i<thumbs.length; i++) {
	thumbs[i].addEventListener('click', function() {
		big.src = this.src;
		title.innerHTML = this.alt;
		for(var j=0; j<lists.length; j++) {
			lists[j].classList.remove('active');
		}
		this.parentNode.classList.add('active');
	})
}