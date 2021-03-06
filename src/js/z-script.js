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

  /* hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $('.nav').slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 768) {
      $('.nav').show();
    } else {
      $('.nav').hide();
    }
  });

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
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* Thumbnail to main img - modal window */
  $('.object-modal__slide').click( function(e){ 
    e.preventDefault(); 
    $(this).closest('.object-modal__img-list').find($('.object-modal__slide--active')).removeClass('object-modal__slide--active');
    $(this).addClass('object-modal__slide--active');
    $(this).closest('.object-modal__img-wrapper').find('.object-modal__img-main').empty();
    $(this).find('img').clone().appendTo('.object-modal__img-main').css('opacity', 0).animate({opacity: 1}, 500);
  });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


});


