'use strict';

(function($) {
  $(document).ready(function() {
$(window).scroll(function(){

    if ( $(this).scrollTop() > 300 ){

      $('.title').addClass('fixed');

    } else {

      $('.fixed').removeClass('fixed');
    }

  });

  });
})(jQuery);
