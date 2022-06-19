$(document).ready(function(){
    $( function() {
        $( "#accordion" ).accordion();
    } );


   

    /* $('div.img11').mouseover(function() {
        $('.meet_tabs')
        .addClass('meet_tabs_active'); 
    })
    .mouseout(function() {
        $('.meet_tabs')
        .removeClass('meet_tabs_active')
    }); */
 
    $('div.img11-1').mouseover(function() {
        $('.mt1')
        .addClass('meet_tabs_active'); 
    })
    .mouseout(function() {
        $('.mt1')
        .removeClass('meet_tabs_active')
    });

    $('div.bg2').mouseover(function() {
        $('.mt2')
        .addClass('meet_tabs_active'); 
    })
    .mouseout(function() {
        $('.mt2')
        .removeClass('meet_tabs_active')
    });

    $('div.bg3').mouseover(function() {
        $('.mt3')
        .addClass('meet_tabs_active'); 
    })
    .mouseout(function() {
        $('.mt3')
        .removeClass('meet_tabs_active')
    });


















   




    








    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/left.jpg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/right.jpg"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false,
                  arrows: false
                }
                        
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      
    });

    /* $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    }); */

    function doggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    doggleSlide('.catalog-item__link');
    doggleSlide('.catalog-item__back');



    // Modal
    
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').on('click', function() {
        /* $('.overlay, #order').fadeIn('slow'); */
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // Mask phone

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
            
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
           $('.pageup').fadeIn(); 
        } else {
            $('.pageup').fadeOut();
        }
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
