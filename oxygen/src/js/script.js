$(document).ready(function(){
    $('ul.menu__list').on('click', 'li:not(.menu__list-item_active)', function() {
        $(this)
          .addClass('menu__list-item_active').siblings().removeClass('menu__list-item_active');
          
      
    });




    $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
        $(this)
          .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
          .closest('section.portfolio').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
      
    });









});