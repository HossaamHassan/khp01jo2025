$(document).ready(function () {
    // Footer toggle functionality
    $(".toggleButton").click(function (e) {
        e.preventDefault();

        // Only work on mobile devices (width <= 991px)
        if ($(window).width() <= 1200) {
            const button = $(this);
            const ul = button.closest(".footer-section").find(".footer-links");
            const plusIcon = button.find(".fa-plus");
            const minusIcon = button.find(".fa-minus");

            // Toggle the show class on the ul
            ul.toggleClass("show");

            // Toggle icon visibility based on the show class
            if (ul.hasClass("show")) {
                plusIcon.hide();
                minusIcon.show();
            } else {
                plusIcon.show();
                minusIcon.hide();
            }
        }
    });
});