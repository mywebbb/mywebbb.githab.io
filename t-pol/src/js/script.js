$(document).ready(function(){

    $('div.calculation__tabs').on('click', 'div:not(.calculation__tab--active)', function() {
        $(this)
          .addClass('calculation__tab--active').siblings().removeClass('calculation__tab--active')
          .closest('section.calculation').find('div.calculation__descr').removeClass('calculation__descr--active').eq($(this).index()).addClass('calculation__descr--active');
      
    });

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });










