//========================
//CUSTOM SCROLLBAR
//========================
$(document).ready(
    function () {
        $("html").niceScroll({
            mousescrollstep: 70,
            cursorcolor: "#2ca8f5",
            cursorwidth: "6px",
            cursorborderradius: "5px",
            cursorborder: "none",
        });
    }
);


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});