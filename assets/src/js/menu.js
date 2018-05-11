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

        // so we can get a fancy scroll animation
        menuItems.click(function (e) {
            console.log(e);
            var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
            offsetTop = href === "#" ? 0 : jQuery(id).offset().top - topMenuHeight + 1;
            jQuery('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
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