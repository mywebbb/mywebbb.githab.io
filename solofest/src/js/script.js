$(window).on("load", function() {
        
        $("section.main").addClass("main-bs100");

        
    });
$(document).ready(function () {
    
    
    


    /* $(window).on("load", function() {
        
        

        
    }); */


    $('ul.menu').on('click', 'li:not(.menu__list--active)', function () {
        $(this)
            .addClass('menu__list--active').siblings().removeClass('menu__list--active')
            .closest('body').find('section').removeClass('active').eq($(this).index()).addClass('active')
            .closest('body').find('h1').addClass('active-title').eq($(this).index()).removeClass('active-title')
            $('img.balloon-1').addClass('active-balloon-2').eq($(this).index()).removeClass('active-balloon-2')
            $('img.balloon-2').addClass('active-balloon-2').eq($(this).index()).removeClass('active-balloon-2')
            $('img.balloon-3').addClass('active-balloon-2').eq($(this).index()).removeClass('active-balloon-2');
            // .closest('body').find('img').addClass('active-balloon-2').eq($(this).index()).removeClass('active-balloon-2');
            // .closest('body').find('section').removeClass('ttt').eq($(this).index()).addClass('ttt');


    });
    /* тест нижнего таба */
    $('div.down-link').on('click', function () {
        $(this)
            .addClass('tabs__list--active').siblings().removeClass('tabs__list--active')
            .closest('body').find('section').removeClass('screen--active').eq($(this).index()).addClass('screen--active');

    });
    // 


    // slider-1
    $('.screen-3__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false
                }

            }
        ],
        variableWidth: true,
        // centerMode: true,
        // centerPadding: '400px',
        // infinite: true,
        // vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    // slider-2
    $('.screen-7__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    // slider-3
    $('.screen-8__slider').slick({
        // variableWidth: true,
        verticalSwiping: true,
        vertical: true,
        centerMode: true,
        // centerPadding: '400px',
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });



    // slider-0 screen-2 mobile
    $('.screen-2__cards-mobile').slick({
        // prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
        // nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
        variableWidth: true,
        // centerMode: true,
        // centerPadding: '400px',
        // infinite: true,
        // vertical: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


   



    /* $('div.img11').mouseover(function() {
        $('.meet_tabs')
        .addClass('meet_tabs_active'); 
    })
    .mouseout(function() {
        $('.meet_tabs')
        .removeClass('meet_tabs_active')
    }); */

    $('div.img11-1').mouseover(function () {
        $('.mt1')
            .addClass('meet_tabs_active');
    })
        .mouseout(function () {
            $('.mt1')
                .removeClass('meet_tabs_active')
        });

    $('div.bg2').mouseover(function () {
        $('.mt2')
            .addClass('meet_tabs_active');
    })
        .mouseout(function () {
            $('.mt2')
                .removeClass('meet_tabs_active')
        });

    $('div.bg3').mouseover(function () {
        $('.mt3')
            .addClass('meet_tabs_active');
    })
        .mouseout(function () {
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
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    doggleSlide('.catalog-item__link');
    doggleSlide('.catalog-item__back');



    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').on('click', function () {
        /* $('.overlay, #order').fadeIn('slow'); */
    });
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // Mask phone

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()

        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Slow scroll

    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

});
