$( document ).ready(function() {
    $('.slick-container').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.slick-arrows-container').slick({
        infinite: true,        
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,      
        autoplay: true,
        autoplaySpeed: 1000, 
    });

    $('.slick-arrows-brand-container').slick({
        infinite: true,        
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,          
    });
});