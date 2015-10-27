(function($) {
  'use strict';

  $(document).on('change keyup keydown paste cut', '.js-adjust-text-height', function() {
    $(this).height(0).height(this.scrollHeight);
  });

  $(document).on('touchstart', function() {
    $('md-tooltip').remove();
  });

  // Realtime debugger (alt key)
  // $(window).keydown(function(e) {
  //   if (e.keyCode === 18) {
  //     debugger;
  //   }
  // });
}(jQuery));
