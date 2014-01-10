var grabX, grabY;

$(document).ready(function() {
	$('.button').on('mousedown mouseup', function(e) {
		grabX = ( e.pageX - $('.button').offset().left + $('.window').offset().left );
		grabY = ( e.pageY - $('.button').offset().top + $('.window').offset().top );
		$(e.currentTarget).toggleClass('dragging');
	});
	$(document).on('mousemove', function(e) {
		var btn = $('.button');
		if ( btn.hasClass('dragging') ) {
			var x = (e.pageX - grabX) + 'px';
			var y = (e.pageY - grabY) + 'px';
			$('.button').css({ left:x, top:y });
		}
	});
});