$(document).ready(function(){
    // --Preloader Start-----------------------------------------------------------------
    $(document).ready(function(){
      setTimeout (function(){
        $('.preloader').fadeOut();
      },2000)
    })
    // --Preloader End-----------------------------------------------------------------
    
    // --Slider start-----------------------------------------------------------------
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1,
    })
    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:3,
    })
    $('#slider3').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:3,
    })

    // --Slider End-----------------------------------------------------------------
    
    // --Header Fix start-----------------------------------------------------------------
    $(window).scroll(function(){
        var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
        
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    // --Header Fix End-----------------------------------------------------------------
    

    // --Upwrw start-----------------------------------------------------------------
    var btn = $('.uparw');
    btn.hide();
    $(window).scroll(function () {
      if($(window).scrollTop()>500)
      {
        btn.fadeIn();
      }
      else
      {
        btn.fadeOut();
      }
    });
    
    btn.on('click',function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},'300');
    });
    // --Upwrw End-----------------------------------------------------------------
    
    // --Counter start-----------------------------------------------------------------
    $.fn.jQuerySimpleCounter = function( options ) {
      var settings = $.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );

      var thisElement = $(this);

      $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
        complete: settings.complete
      });
    };

      $('#number1').jQuerySimpleCounter({end: 20,duration: 3000});
      $('#number2').jQuerySimpleCounter({end: 80,duration: 3000});
      $('#number3').jQuerySimpleCounter({end: 205,duration: 2000});
    // --Counter end-----------------------------------------------------------------
    
    // --Accordian start-----------------------------------------------------------------    
    $('.toggle').click(function(e) {
      e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .inner').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });
    // --Accordian end-----------------------------------------------------------------    
})
