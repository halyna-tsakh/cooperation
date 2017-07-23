$(function() {
  var resizeTimer;
  var portion = 0;
  var $window = $(window);
  var $tiles = $('#gallery .tile');
  var $swiper = $('.swiper-container');

  function displayPortion() {
    ++portion;
    if (portion > 2) {
      portion = 0;
    }
    $tiles.find('.image');

    $tiles.each(function(index) {
      var $tile = $(this);

      setTimeout(function() {
        $tile.find('.image').addClass('hidden').eq(portion).removeClass('hidden');
      }, index * 100);
    });

    setTimeout(displayPortion, 2000);
  }

  function updateImagesHeight() {
    resizeTimer = undefined;

    $tiles.each(function() {
      var $tile = $(this);

      $tile.height($tile.width());
    });

    $swiper.height($swiper.width());
  }

  $window.on('resize', function() {
    if (!resizeTimer) {
      resizeTimer = setTimeout(updateImagesHeight, 200);
    }
  });

  new Swiper('.swiper-container', {
    autoplay: 5000,
    spaceBetween: 20,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    simulateTouch: true
  });
  updateImagesHeight();
  setTimeout(displayPortion, 7000);
});
