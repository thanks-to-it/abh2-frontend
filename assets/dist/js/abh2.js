var abh2_menu = {
    introHeight: 0,
    header: null,

    handle_menu_items: function () {
        var topMenu = jQuery(".header .menu"),
            offset = 40,
            topMenuHeight = topMenu.outerHeight() + offset,
            // All list items
            menuItems = topMenu.find('a[href*="#"]'),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var href = jQuery(this).attr("href"),
                    id = href.substring(href.indexOf('#')),
                    item = jQuery(id);

                //console.log(item)
                if (item.length) {
                    return item;
                }
            });

        function preventAnchorScroll() {
            var scrollToTop = function () {
                $(window).scrollTop(0);
            };
            if (window.location.hash) {
                // handler is executed at most once
                $(window).one('scroll', scrollToTop);
            }

            // make sure to release scroll 1 second after document readiness
            // to avoid negative UX
            $(function () {
                setTimeout(
                    function () {
                        $(window).off('scroll', scrollToTop);
                    },
                    1000
                );
            });
        }

        // so we can get a fancy scroll animation
        menuItems.click(function (e) {

            var target = this.hash;
            //target = target.replace('#', '');
            //

            //console.log(e.preventDefault);
            var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
            offsetTop = href === "#" ? 0 : jQuery(id).offset().top - topMenuHeight;
            jQuery('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300,function(){
                window.location.hash = target;
                window.scrollTo(0, offsetTop); // values are x,y-offset
            });
            e.preventDefault();
        });

        // Bind to scroll
        jQuery(window).scroll(function () {
            // Get container scroll position
            var fromTop = jQuery(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function () {
                if (jQuery(this).offset().top < fromTop)
                    return this;
            });

            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            menuItems.parent().parent().removeClass("active");
            if (id) {
                menuItems.parent().end().filter("[href*='#" + id + "']").parent().parent().addClass("active");
            }

        })
    },

    detect_menu_style: function () {
        var intro = document.querySelectorAll('.section-intro');
        if (intro.length) {
            this.introHeight = intro[0].offsetHeight;
            this.header = document.querySelectorAll('.block.header');
            //window.onscroll = abh2_menu.swap_menu_style();
            window.addEventListener('scroll', abh2_menu.swap_menu_style);
            abh2_menu.swap_menu_style();
        }else{
            this.header = document.querySelectorAll('.block.header');
            abh2_menu.header[0].classList.add('style2');
        }
    },

    swap_menu_style: function () {
        if (document.documentElement.scrollTop > (abh2_menu.introHeight - abh2_menu.header[0].offsetHeight - 100)) {
            abh2_menu.header[0].classList.add('style2');
        } else {
            abh2_menu.header[0].classList.remove('style2');
        }
    },

    handle_mobile_opening: function () {
        abh2_menu.header = document.querySelectorAll('.block.header');
        document.addEventListener('click', function (event) {
            var qs = document.querySelectorAll('.toggle-icon');
            if (qs.length) {
                var el = event.target, index = -1;
                while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                    el = el.parentElement;
                }
                if (index > -1) {
                    abh2_menu.header[0].classList.toggle('open');
                }
            }
        })
    }
};

//document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function () {
    abh2_menu.detect_menu_style();
    abh2_menu.handle_mobile_opening();
    abh2_menu.handle_menu_items();
});
window.addEventListener("load", function () {
    jQuery(document).on("click", "[data-open-modal!=''][data-open-modal]", function (e) {
        var modal_id = jQuery(this).attr('data-open-modal');

        if (jQuery("#" + modal_id).length) {
            e.preventDefault();
            MicroModal.show(modal_id, {
                disableScroll: false,
                awaitCloseAnimation: true
            }); // [1]
        }
    });


});

jQuery(window).scroll(function () {
    if(jQuery(this).scrollTop()>0){
        jQuery('.scroll-downs').addClass('scrolled');
    }else{
        jQuery('.scroll-downs').removeClass('scrolled');
    }
});
jQuery(window).scroll();
jQuery(window).on('load', function () {
    jQuery('select').select2();
});
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
window.addEventListener("load", function () {
    /*jQuery("input[type='checkbox']").uniform({

    });*/
});
