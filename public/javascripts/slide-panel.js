jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) {
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
});


// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {

       var footerHeight = 0,
           footerTop = 0,
           $footer = $("#footer");

       positionFooter();

       function positionFooter() {

                footerHeight = $footer.height();
                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

               if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   })
               } else {
                   $footer.css({
                        position: "static"
                   })
               }

       }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)

});
