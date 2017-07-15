function setWidthPager() {
	var w_dataTable = $('.table-responsive .dataTable').innerWidth();
	$('.ng-table-pager').width(w_dataTable);
}
<<<<<<< .merge_file_a03040
$(document).ready(function() {
    // scrollbar to header when using scrollbar data body
	function scroller(from, to) {
	    $("#" + to).scrollLeft($("#" + from).scrollLeft());
	}

 	$(window).resize(function(){
    	if ($(window).width() <= 767) {
	  		setWidthPager();
		}
  	}); 
=======
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

>>>>>>> .merge_file_a05316
});