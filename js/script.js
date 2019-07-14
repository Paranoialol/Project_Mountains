jQuery(document).ready(function () {
	$(".menu a").mPageScroll2id({
		offset: -55
	});
	$(".browse a").mPageScroll2id({
		offset: 0
	});
	$('.burger_menu').on('click', function (e) {
		e.preventDefault;
		$(this).toggleClass('burger_menu_active');
		$('.menu').toggleClass('menu_active');
	});
})

var t;

function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -100);
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
}



/* preloder */
document.body.onload = function () {

	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
}
/* preloder */