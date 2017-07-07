function setWidthPager() {
	var w_dataTable = $('.table-responsive .dataTable').innerWidth();
	$('.ng-table-pager').width(w_dataTable);
}
$(document).ready(function () {
	// scrollbar to header when using scrollbar data body
	function scroller(from, to) {
		$("#" + to).scrollLeft($("#" + from).scrollLeft());
	}

	$(window).resize(function () {
		if ($(window).width() <= 767) {
			setWidthPager();
		}
	});
	var getXsrfToken = function () {
		var cookies = document.cookie.split(';');
		var token = '';

		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].split('=');
			if (cookie[0] == 'XSRF-TOKEN') {
				token = decodeURIComponent(cookie[1]);
			}
		}
// alert(token);
		return token;
	}
	getXsrfToken();
});