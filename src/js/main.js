$(document).on('DOMContentLoaded', () => {
  /*** Header menu ***/
  // Open menu
  $('.js-header-burger').on('click', function () {
    $(this).closest('.header__nav').addClass('open');
    $('body').addClass('no-scroll');
  });

  // Close menu
  $('.js-menu-close').on('click', function () {
    $(this).closest('.header__nav').removeClass('open');
    $('body').removeClass('no-scroll');
  });

  // Close menu on click out of menu
  $(document).mouseup(function (e) {
    const menu = $('.header__nav-menu');

    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $('.header__nav').removeClass('open');
      $('body').removeClass('no-scroll');
    }
  });

  /*** Main slider ***/
  new Swiper('.js-slider', {
    speed: 800,
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.js-btn-next').on('click', function () {
    $('.main-slider__next').click();
  });

  $('.js-btn-prev').on('click', function () {
    $('.main-slider__prev').click();
  });

  /*** Change speed level ***/
  $('.js-speed-lvl').on('click', function () {
    $('.js-speed-lvl').removeClass('active');
    $(this).addClass('active');
  });
});
