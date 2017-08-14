    function isScrolledIntoView(element) {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + 1;

        if( isTouchDevice() ){
            return (
                (elementTop <= viewportBottom)
            );
        } else {
            return (
                (elementBottom >= viewportTop) &&
                (elementTop <= viewportBottom) &&
                (elementBottom <= viewportBottom) &&
                (elementTop >= viewportTop)
            );
        }
    }


    function scrollMajig(element, inView, outView) {
		var viewed = false;

		var last_known_scroll_position = 0;
		var ticking = false;
		var interval;
		function inViewTouch(scroll_pos) {
			if(isScrolledIntoView(element) && !viewed){
				if (inView) { inView(); viewed = true; clearInterval(interval); }
			} else {
				if (outView) { outView(); }
			}
		}
		if( isTouchDevice() ){
			interval = setInterval(function(){
				last_known_scroll_position = window.scrollY;
				if (!ticking) {
					window.requestAnimationFrame(function() {
					inViewTouch(last_known_scroll_position);
					ticking = false;
					});
				}
				ticking = true;
			},20);
		} else {
			$(window).on('scroll resize load', function(e) {
				last_known_scroll_position = window.scrollY;
				if (!ticking) {
					window.requestAnimationFrame(function() {
					doSomething(last_known_scroll_position);
					ticking = false;
					});
				}
				ticking = true;
			});
		}
    }

    export default scrollMajig;
