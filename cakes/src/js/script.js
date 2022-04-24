$(document).ready(function(){
  $('.slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
    // variableWidth: true,
    centerMode: true,
    centerPadding: '400px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '190px',
          // arrows: false,
          centerMode: true,
          
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1780,
        settings: {
          centerPadding: '190px',
          // arrows: false,
          centerMode: true,
          
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    
  
  
  
  
  
  
  
  
  
  /* $('.slider__items').slick({
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="icons/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="icons/arrow-right.svg" alt=""></button>',
          speed: 1200,
          dots: true,
          autoplay: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            speed: 1200,
            dots: true,
            autoplay: true,
            arrows: false
          }
          
        }
      ]
    
    }); */

    /* $('ul.menu__list').on('click', 'li:not(.menu__list-item_active)', function() {
        $(this)
          .addClass('menu__list-item_active').siblings().removeClass('menu__list-item_active');
          
      
    }); */


    $('ul.menu').on('click', 'li:not(.menu__list_active)', function() {
      $(this)
        .addClass('menu__list_active').siblings().removeClass('menu__list_active');
        
    
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

    /* $('a[href^="#"').on('click', function() {

      let href = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      });
      return false;
    }); */

});


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav__wrapper'),
  menuItem = document.querySelectorAll('.menu__list'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav__wrapper_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('nav__wrapper_active');
      })
  })
})