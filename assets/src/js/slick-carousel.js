jQuery(window).on('load', function () {

    // Intro
    jQuery('.intro-slider').on('init', function (event, slick, direction) {
        jQuery(this).addClass('active');
    }).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5500,
        adaptiveHeight: true,
    });

    // Governanca
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

    // Noticias
    jQuery('.section-noticias .slider').on('init', function (event, slick, direction) {
        jQuery(this).addClass('active');
    }).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        arrows: false,
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

    // Associese
    jQuery('.slider-associese').on('init', function (event, slick, direction) {
        jQuery(this).addClass('active');
    }).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: false,
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



});