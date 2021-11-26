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
        autoplay: true,
    });




});