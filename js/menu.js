
$(document).ready(function () {
	$('#menu_ppal').click(function (e) {
		var $menu = $('.menu_lateral');
		$menu.toggleClass("open");
		e.preventDefault();
  });
  $('#cerrar').click(function (e) {
    var $menu = $('.menu_lateral');
		$menu.removeClass("open");
		e.preventDefault();
  });
});