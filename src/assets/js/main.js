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

});