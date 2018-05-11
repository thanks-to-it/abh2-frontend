jQuery(window).on('load', function () {
    jQuery('.section-governanca .slider').on('init', function (event, slick, direction) {
        jQuery(this).addClass('active');
    }).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    jQuery('.intro-slider').on('init', function (event, slick, direction) {
        jQuery(this).addClass('active');
    }).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5500,
        adaptiveHeight: true,
    });
});