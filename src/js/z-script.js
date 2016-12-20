// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* галерея banner */
  $('.banner__gallery').slick({
    infinite: true,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });


  /* sticky menu */
  // var headerInner = $('.header__inner');
  // var headerNav = $('.header__nav');
  // $(window).scroll(function () {
  //   if ($(window).width() > 768) {
  //     if ($(this).scrollTop() >= headerInner.height() ) {
  //       $(headerNav).addClass('header__nav--sticky');
  //     } else {
  //       $(headerNav).removeClass('header__nav--sticky');
  //     }
  //   }
  // });

  /* hamburger */
  // $('.hamburger').click(function(e) { 
  //     e.preventDefault();    
  //     $('.nav__wrapper').toggle();
  // });


  /* Object in the modal window */
  $('.object__link').click( function(e){ 
    e.preventDefault(); 
    $('body').css({'overflow-y':'hidden'});   
    $('.overlay').show();
    var thisObject = $(this).closest('.object');
    $(this).closest('.object').find($('.object-modal')).detach().appendTo($('.overlay'))
    .animate({opacity: 1, 'zIndex': 9}, 200);
    /* Close the modal window */
    $('.overlay__bg, .object-modal__close').click( function(e){ 
      e.preventDefault(); 
      $('body').css({'overflow-y':'auto'});
      $(this).closest('.overlay').find($('.object-modal'))
        .animate({opacity: 0, 'zIndex': -1}, 200, function(){
          $(this).appendTo($(thisObject));
          $('.overlay').fadeOut(400);
        });
    });
  });
 

  /* Form in modal window */
  $('.call__link').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'hidden'});   
    $('.overlay').show();
    $('.overlay').find('.form--call').fadeIn();
    /* Close modal window */
    $('.overlay__bg, .form__close').click( function(e){ 
      e.preventDefault();
      $('body').css({'overflow':'auto'});
      $(this).closest('.overlay').find('.form').fadeOut();
      $(this).closest('.overlay').fadeOut(400);
    }); 
  });


  /* галерея "клиенты" */
  $('.about-item-gallery__gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '0'
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });




  // /* плавный скролл наверх */
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }






});


