$(function() {
  var $container = $('#aboutTfp');

  $container.on('click', '.caption-container a', function(e) {
    e.preventDefault();
    $container.toggleClass('open');

    if ($container.hasClass('open')) {
      $('#layout').scrollTop(2000);
    }
  });
});