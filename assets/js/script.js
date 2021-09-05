$(function () {
       var header = $("#header"),
          introH = $("#intro").innerHeight(),
          scrollOffSet = $(window).scrollTop();


    /*Fixed Header*/

     checkScroll(scrollOffSet);

    $(window).on("scroll", function ()  {
        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);

    });

    function  checkScroll(scrollOffSet)  {

        if (scrollOffSet >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll

    $("data-scroll").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffSet = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500);

    });
    */

    /*Menu Nav Toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

});

