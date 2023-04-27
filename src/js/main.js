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
      nextEl: '.main-slider__next',
      prevEl: '.main-slider__prev',
    },
  });

  $('.js-btn-next').on('click', function () {
    $('.main-slider__next').click();
  });

  $('.js-btn-prev').on('click', function () {
    $('.main-slider__prev').click();
  });

  /*** Gift slider ***/
  new Swiper('.js-gift-slider', {
    speed: 0,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.gift-slider__next',
      prevEl: '.gift-slider__prev',
    },
    on: {
      slideNextTransitionStart: function () {
        const slider = document.querySelector('.gift-slider');

        const prevSlide = slider.querySelector('.swiper-slide-prev');
        const prevSlideImg = prevSlide.querySelector('.gift-slider__image');

        const activeSlide = slider.querySelector('.swiper-slide-active');
        const activeSlideImg = activeSlide.querySelector('.gift-slider__image');

        const timing = '300ms';

        // Set prev
        prevSlideImg.setAttribute('style', '');
        prevSlideImg.style.setProperty('transform', 'translateX(100%)');

        // Set active
        activeSlideImg.classList.remove('animation-right', 'animation-left');
        activeSlideImg.setAttribute('style', '');
        activeSlideImg.classList.add('animation-right');
        activeSlideImg.style.setProperty('transform', 'translate(100%) rotate(-90deg)');

        setTimeout(() => {
          prevSlideImg.style.setProperty('transition-duration', timing);
          prevSlideImg.style.setProperty('transform', 'translateX(100%) rotate(90deg)');

          activeSlideImg.style.setProperty('transition-duration', timing);
          activeSlideImg.style.setProperty('transform', 'rotate(0deg)');
        }, 0);
      },

      slidePrevTransitionStart: function () {
        const slider = document.querySelector('.gift-slider');

        const activeSlide = slider.querySelector('.swiper-slide-active');
        const activeSlideImg = activeSlide.querySelector('.gift-slider__image');

        const nextSlide = slider.querySelector('.swiper-slide-next');
        const nextSlideImg = nextSlide.querySelector('.gift-slider__image');

        const timing = '300ms';

        // Set next
        nextSlideImg.setAttribute('style', '');
        nextSlideImg.style.setProperty('transform', 'translateX(-100%)');

        // Set active
        activeSlideImg.classList.remove('animation-right', 'animation-left');
        activeSlideImg.setAttribute('style', '');
        activeSlideImg.classList.add('animation-left');
        activeSlideImg.style.setProperty('transform', 'rotate(90deg)');

        setTimeout(() => {
          nextSlideImg.style.setProperty('transition-duration', timing);
          nextSlideImg.style.setProperty('transform', 'translateX(-100%) rotate(-90deg)');

          activeSlideImg.style.setProperty('transition-duration', timing);
          activeSlideImg.style.setProperty('transform', 'rotate(0deg)');
        }, 0);
      },
    },
  });

  /*** Change speed level ***/
  $('.js-speed-lvl').on('click', function () {
    const thisLvl = $(this).attr('data-btn-lvl');
    const windowWidth = $(window).width();
    let rotateVal = '';
    let arrowScale = '';

    $('.js-speed-lvl').removeClass('active');
    $(this).addClass('active');
    $('.speedometer__lvl').attr('data-lvl', thisLvl);

    if (thisLvl === '1') {
      rotateVal = '110';
    } else if (thisLvl === '2') {
      rotateVal = '230';
    } else {
      rotateVal = '350';
    }

    if (windowWidth <= 400) {
      arrowScale = '0.8';
    } else if (windowWidth > 400 && windowWidth <= 440) {
      arrowScale = '0.9';
    } else {
      arrowScale = '1';
    }

    $('.speedometer__arrow').css('transform', `translate(-50%, -50%) rotate(${rotateVal}deg) scale(${arrowScale})`);
  });
});
