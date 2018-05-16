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
