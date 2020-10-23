$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        navText: ["",""],
        mouseDrag: false,    
        dots: true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0: {               
                nav:false
            },
            700: {
                nav: true
            },
            1000:{               
                dots: false,
                items: 2
            }                     
        }
    });
  });