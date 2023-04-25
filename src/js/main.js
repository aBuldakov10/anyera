$(document).on('DOMContentLoaded', () => {
  /*** Header menu ***/
  // Open menu
  $('.js-header-burger').on('click', function () {
    $(this).closest('.header__nav').addClass('open');
  });

  // Close menu
  $('.js-menu-close').on('click', function () {
    $(this).closest('.header__nav').removeClass('open');
  });

  // Close menu on click out of menu
  $(document).mouseup(function (e) {
    const menu = $('.header__nav-menu');

    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $('.header__nav').removeClass('open');
    }
  });
});
