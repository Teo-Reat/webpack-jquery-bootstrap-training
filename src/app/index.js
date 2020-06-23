import $ from 'jquery'
import './modal'
import './util'
import 'slick-carousel'

$(document).ready(() => {
	// Modal window
	$('#myModal').css('display: none')

	// Menu on mobile version
	$('.mobile-bars').click(() => {
		$('.mobile-bars').css('display', 'none')
		$('.mobile-bars__close').css('display', 'block')
		$('.main-navigation').slideDown()
		$('.contact-block').slideDown()
	})
	$('.mobile-bars__close').click(() => {
		$('.mobile-bars__close').css('display', 'none')
		$('.mobile-bars').css('display', 'block')
		$('.main-navigation').slideUp()
		$('.contact-block').slideUp()
	})

	// Submenu, mobile version
	$('#main-navigation__system').click(() => {
		$('.main-navigation__item__list').slideToggle('slow', 'linear')
		$('#main-navigation__system').toggleClass('main-navigation__item__active')
	})

	//Slider in prime
	$('.prime__slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					appendDots: $('.prime__slider__dots')
				}
			}
		]

	});

	//Slider in customers block
	$('.customers__wrapper').slick({
		autoplay: true,
		arrows: true,
		slidesToShow: 5,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			}
		]
	});

	//Slider in capabilities block
	$('.capabilities__slider').slick({
		autoplay: true,
		arrows: true,
		infinite: true,
	});
})


