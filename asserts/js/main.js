if (window.innerWidth <= 992) {
    const headerTop = document.querySelector('.header_area .header_top .container .row');
    headerTop.classList.add('activeHTop');
    const headerBottom = document.querySelector('.header_area .header_bottom .container .row');
    headerBottom.classList.add('activeHBot');

} else {
    headerTop.classList.remove('activeHTop');
    headerBottom.classList.remove('activeHBot');
}






$(document).ready(function () {
    $('.slider_slide').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.counter').counterUp();



});


$(document).ready(function () {

    $('.tg1').click(function () {
        $('.tgHide').fadeToggle(1000);
    });

    $('.tg2').click(function () {
        $('.tg2P').fadeToggle(1000);
    });


})