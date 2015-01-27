'use strict';
(function($) {
 $(document).ready(function() {
 $('#image').crossfade(0.3);

new WOW().init();


    var svg = new Walkway({
  selector: 'svg',
  duration: '5000',
  // can pass in a function or a string like 'easeOutQuint'
  easing: function (t) {
    return t * t;
  }

});

svg.draw();
//svg

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});


    $('.photoerN').fluidbox(
      {
        viewportFill: 0.25
      }
    );

    // // document on scroll, execute the following function
    // $(document).on('scroll', function(){

    //   // Variables calculating various positions
    //   var targetEle = $('#about'),
    //       eleOffset = targetEle.offset().top,
    //       windowOffset = $(window).scrollTop(),
    //       eleDiff = eleOffset - windowOffset;

    //       console.log(eleDiff);

    //   // If targetELe is scrolled past x amount (50 in this case), it will add Class of "test-blue"
    //   if(eleDiff <= 0) {
    //     $('#sticky').addClass("test-blue");
    //   } 
    //   // Else we check if the target Element has the class of "test-blue", if it does, we remove it
    //   else {
    //     if($('#sticky').hasClass("test-blue")) {
    //       $('#sticky').removeClass("test-blue");
    //     }
    //   }
    // });

  	$('.bono').imageScroll({
      
    })
  });
})(jQuery);