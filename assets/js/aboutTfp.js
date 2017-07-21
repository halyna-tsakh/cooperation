$(function() {
  var $layout = $('#layout');
  var $wrap = $('#wrap');
  var $container = $('#aboutTfp');

  function scrollToAboutTfp() {
    $layout.animate({ scrollTop: $wrap.height() - $container.height() }, 500);
  }

  $container.on('click', '.caption-container a', function(e) {
    e.preventDefault();
    $container.toggleClass('open');

    if ($container.hasClass('open')) {
      setTimeout(scrollToAboutTfp, 0);
    }
  });
});