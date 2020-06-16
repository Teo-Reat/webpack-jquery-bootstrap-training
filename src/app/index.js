import $ from 'jquery'

$(document).ready(() => {
	$('#button__consultation').click(() => {
		$('#popup__consultation').removeClass('hide')
	})
	$('#popup__consultation__close').click(() => {
		$('#popup__consultation').addClass('hide')
	})
	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			$('#popup__consultation').addClass('hide')
		}
	});
	$('#main-navigation__system').click(() => {
		$('#main-navigation__system').toggleClass('main-navigation__item__active')
		$('#main-navigation__system__menu').toggleClass('hide')
	})

	// let menu = $('.header');
	// let origOffsetY = menu.offset().top;
	//
	// function scroll() {
	// 	if ($(window).scrollTop() >= origOffsetY) {
	// 		$('.menu').addClass('sticky');
	// 		$('.content').addClass('menu-padding');
	// 	} else {
	// 		$('.menu').removeClass('sticky');
	// 		$('.content').removeClass('menu-padding');
	// 	}
	// }
	// document.onscroll = scroll;
})


