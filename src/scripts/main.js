// Main
$(document).ready(function () {
	// Phần Slider
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		items: 1,
		navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>']
		// responsive:{
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:3
		// 	},
		// 	1000:{
		// 		items:5
		// 	}
		// }
	})
});
