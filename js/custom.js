$(document).ready(function(){
    'use strict'
    //for banner-slider
    
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.gallary-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false ,
    });

    //about video pop up

    $('.venobox').venobox(); 

});

//for testimonial-slider
    
$('.testimonial-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
});