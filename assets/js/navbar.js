$(".navbar-mobile").click(function() {
	$(".navbar-mobile-list").toggle();
});

$(window).resize(function() {
	$(".navbar-mobile-list").css("display", "none");
})