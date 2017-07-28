$(".header_logo img").click(function(evt) {
	$('.menu').slideToggle(200);
});
$(document).on('click', function(evt) {																	//закрыть всплывающее меню авторизации по клику на любом свободном месте
	if (!$(evt.target).closest(".header_logo img, .menu").length) {
		$('.menu').hide();
	}
	evt.stopPropagation();
});//end click