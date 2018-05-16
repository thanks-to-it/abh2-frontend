jQuery(window).scroll(function () {
    if(jQuery(this).scrollTop()>0){
        jQuery('.scroll-downs').addClass('scrolled');
    }else{
        jQuery('.scroll-downs').removeClass('scrolled');
    }
});
jQuery(window).scroll();