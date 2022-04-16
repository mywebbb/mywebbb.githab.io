$(document).ready(function(){
    $('.slider__items').slick({
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
      speed: 1200,
      dots: true,
      autoplay: true,

      
  
    });

    /* $('ul.menu__list').on('click', 'li:not(.menu__list-item_active)', function() {
        $(this)
          .addClass('menu__list-item_active').siblings().removeClass('menu__list-item_active');
          
      
    }); */


    $('ul.menu__list').on('click', 'li:not(.menu__list-item_active)', function() {
      $(this)
        .addClass('menu__list-item_active').siblings().removeClass('menu__list-item_active');
        
    
    });



   /* $('ul.menu__list').on('click', 'a:not(.menu__link_active)', function() {
      $(this)
        .addClass('menu__link_active').siblings(li).removeClass('menu__link_active');
        
    
    }); */
 
 




    $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
        $(this)
          .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
          .closest('section.portfolio').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
      
    });



    // Slow scroll

    $('a[href^="#"').on('click', function() {

      let href = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      });
      return false;
  });









});