(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        $('img').toggleClass('dark-modeimg')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

let darkMode = document.querySelector("#active-dark-mode");
let imgName = document.querySelector("#icon-lamp");

darkMode.onclick =function(){

  if (imgName.src.match("preto")) {
    imgName.src = "images/logo sem fundo brancos.png";
      
  } else{
      location.reload();
   
  }
    
    
}

})(jQuery);
