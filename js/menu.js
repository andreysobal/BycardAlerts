$(".header_logo img").on('click',
	function(evt) {
		$('.menu').slideToggle(200);
		const menuImg = new Image();									//for preload images
		menuImg.src = "img/menu.svg";
		const menuClose = new Image();
		menuClose.src = "img/close.svg";
		if (evt.target.src == menuImg.src) {
			$(this).attr("src", menuClose.src);
		} else {
			$(this).attr("src", menuImg.src);
		}
	});

$(document).on('click', function(evt) {																	//close pop-up menu cliking any outside area
	if (!$(evt.target).closest(".header_logo img, .menu").length) {
		$('.menu').hide();
		const menuClose = new Image();																		//for preload image
		menuClose.src = "img/close.svg";
		const img = $(".header_logo img");
		if (img[0].src == menuClose.src){img.attr("src", "img/menu.svg");}
	}
	evt.stopPropagation();
});//end click

