//Header background
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".download").addClass("active");
    } else {
        $(".download").removeClass("active");
    }
});