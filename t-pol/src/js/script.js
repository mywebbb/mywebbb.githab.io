$(document).ready(function(){

    $('div.calculation__tabs').on('click', 'div:not(.calculation__tab--active)', function() {
        $(this)
          .addClass('calculation__tab--active').siblings().removeClass('calculation__tab--active')
          .closest('section.calculation').find('div.calculation__descr').removeClass('calculation__descr--active').eq($(this).index()).addClass('calculation__descr--active');
      
    });

});










