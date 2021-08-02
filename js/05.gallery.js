// window, Math, String, Number, Date, Array, Console, JSON, Object

var products = [
	{
		name: 'Good Product1',
		src: '../img/p1.jpg',
		price: 12.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product2',
		src: '../img/p2.jpg',
		price: 13.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product3',
		src: '../img/p3.jpg',
		price: 13.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product4',
		src: '../img/p4.jpg',
		price: 14.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product5',
		src: '../img/p5.jpg',
		price: 15.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product6',
		src: '../img/p6.jpg',
		price: 16.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product7',
		src: '../img/p7.jpg',
		price: 17.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product8',
		src: '../img/p8.jpg',
		price: 18.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product9',
		src: '../img/p9.jpg',
		price: 19.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product10',
		src: '../img/p10.jpg',
		price: 120.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product11',
		src: '../img/p11.jpg',
		price: 121.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product12',
		src: '../img/p12.jpg',
		price: 122.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, 
]

$(document).ready(function() {
	var cnt = products.length;
	for(var i=0, html;i<cnt;i++) {
		html  = '<li class="prd">';
		html += '<div class="imgs">';
		html += '<img src="'+products[i].src+'" class="w100">';
		html += '</div>';
		html += '<div class="conts">';
		html += '<h2 class="name">'+products[i].name+'</h2>';
		html += '<p class="content">'+products[i].content+'</p>';
		html += '<div class="price">$'+products[i].price+'</div>';
		html += '</div>';
		html += '</li>';
		// $('.prd-wrap').html( $('.prd-wrap').html() + html );
		// $('.prd-wrap').prepend(html);
		$('.prd-wrap').append(html);
	}
});