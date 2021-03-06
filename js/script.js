$(document).ready(function(){

    // NAVIGATION

    $('nav a').on('click', function(event){
      event.preventDefault();

      let href = $(this).attr('href');
      let height = 30;
      let offset = $(href).offset().top - height;

      $('body,html').animate({
        scrollTop: offset,
      }, 700);
    });

    $('.to-top').on('click', function(event){
      event.preventDefault();

      $('body,html').animate({
        scrollTop: 0,
      }, 700);
    });

    // SWIPER

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper__button_next',
          prevEl: '.swiper__button_prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
          }
        }
      });
    
    // PARALLAX

    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();

    // MENU

    const burger = document.querySelector('.menu-burger_header_mobile');
    const close = document.querySelector('.main-menu__button_exit');
    const menu = document.querySelector('.main-menu_header_mobile');
    const hidden = document.querySelector('.html');

    function showMenu() {
        menu.classList.add('menu_showed');
        hidden.classList.add('html-hidden');
    }

    function closeMenu() {
        menu.classList.remove('menu_showed');
        hidden.classList.remove('html-hidden');
    }

    burger.addEventListener('click', showMenu);
    close.addEventListener('click', closeMenu);

    // POPUP-CALL

    const popupOpenCall = document.querySelectorAll('.popup_call_open');
    const popupCloseCall = document.querySelector('.popup__button_exit_call');
    const popupCall = document.querySelector('.popup_call');

    function showPopupCall() {
      popupCall.classList.add('popup_show');
      hidden.classList.add('html_hidden');
    }

    function closePopupCall() {
      popupCall.classList.remove('popup_show');
      hidden.classList.remove('html_hidden');
    }

    popupOpenCall.forEach(btn => btn.addEventListener('click', showPopupCall));
    popupCloseCall.addEventListener('click', closePopupCall);

    // POPUP-ORDER

    const popupOpenOrder = document.querySelectorAll('.popup_order_open');
    const popupCloseOrder = document.querySelector('.popup__button_exit_order');
    const popupOrder = document.querySelector('.popup_order');

    function showPopupOrder() {
      popupOrder.classList.add('popup_show');
      hidden.classList.add('html_hidden');
    }

    function closePopupOrder() {
      popupOrder.classList.remove('popup_show');
      hidden.classList.remove('html_hidden');
    }

    popupOpenOrder.forEach(btn => btn.addEventListener('click', showPopupOrder));
    popupCloseOrder.addEventListener('click', closePopupOrder);

    // TEL-MASK

    $(function() {
      $('.tel-mask').mask('+7(000)000-00-00');
    });
});
