$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    var threshold = $(window).height() - 80; 

    if (scroll >= threshold) {
        $('#js-header').addClass('fixed');
    } else {
        $('#js-header').removeClass('fixed');
    }
});
