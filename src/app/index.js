import $ from 'jquery'
import './modal'
import './util'
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

$(document).ready(() => {
	// Modal window
	$('#myModal').css('display: none')

	// Menu on mobile version
	$('.mobile-bars').click(() => {
		$('.mobile-bars').css('display','none')
		$('.mobile-bars__close').css('display', 'block')
		$('.main-navigation').slideDown()
		$('.contact-block').slideDown()
	})
	$('.mobile-bars__close').click(() => {
		$('.mobile-bars__close').css('display','none')
		$('.mobile-bars').css('display', 'block')
		$('.main-navigation').slideUp()
		$('.contact-block').slideUp()
	})

	// Submenu, mobile version
	$('#main-navigation__system').click(() => {
		$('.main-navigation__item__list').slideToggle('slow', 'linear')
		$('#main-navigation__system').toggleClass('main-navigation__item__active')
	})
})


