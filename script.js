var rabatt = true;
var price = {
	standard_price: 39.99,
	premium_price: 44.99,

	rabatt_standard_price: 35.99,
	rabatt_premium_price: 39.99
}

$(function() {

	// Navigation
	$('.home-button').click(() => {
		setTimeout(() => {
			$([document.documentElement, document.body]).animate({
		        scrollTop: $("#information-section").offset().top - 95+'px'
		    }, 600);
		});
	});
	$('.see-products').click(() => {
		setTimeout(() => {
			$([document.documentElement, document.body]).animate({
		        scrollTop: $("#product-section").offset().top - 75+'px'
		    }, 600);
		});
	});



	// Load price
	$('.standard_price').html(price.standard_price+'$');
	$('.premium_price').html(price.premium_price+'$');
	if (rabatt == true) {
		$('.standard_price').css({
			'color': '#666',
			'text-decoration': 'line-through'
		});
		$('.premium_price').css({
			'color': '#666',
			'text-decoration': 'line-through'
		});

		$('.rabatt_standard_price').html(price.rabatt_standard_price+'$');
		$('.rabatt_premium_price').html(price.rabatt_premium_price+'$');
	}
});