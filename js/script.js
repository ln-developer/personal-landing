$(document).ready(function(){
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
    
    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();

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

    $("#popup__input_tel").mask("+7 (999) 999-9999",{placeholder:" "});
});