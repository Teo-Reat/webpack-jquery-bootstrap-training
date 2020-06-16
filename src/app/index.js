import $ from 'jquery'

$(document).ready(() => {
	$('#button__consultation').click(() => {
		$('#popup__consultation').removeClass('hide')
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
})


