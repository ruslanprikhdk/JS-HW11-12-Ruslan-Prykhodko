(function ($) {

  $.fn.carousel = function() {
    var $left = $('.carousel-arrow-left');
    var $right = $('.carousel-arrow-right');
    var $elementsList = $('.carousel-list');

    var $pixelsOffset = 125;
    var $currentLeftValue = 0;

    $left.click(function() {
      if ($currentLeftValue != 0) {
        $currentLeftValue += 125;
        $elementsList.stop().animate({ left: $currentLeftValue + 'px'}, 500);
        }
    });

    $right.click(function() {
      if ($currentLeftValue != -250) {
        $currentLeftValue -= 125;
        $elementsList.stop().animate({ left: $currentLeftValue + 'px'}, 500);
        }
    });

  }

}) (jQuery);
