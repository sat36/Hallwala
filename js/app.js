var videoWidth = $('iframe').width();
videoHeight = videoWidth * .61;
$('iframe').css('height', videoHeight);

var SingleRoomSliderdWidth = $('.simple-slider').width();
var SingleRoomSliderdHeight = SingleRoomSliderdWidth * .74;
$('.thumb-preview').css('height', SingleRoomSliderdHeight);
$('.imng-preview').css('height', SingleRoomSliderdHeight);

// flatpickr Calendar configuration
flatpickr(".flatpickr");


	$(document).ready(function(){
			
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".main-header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".main-header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
	});
