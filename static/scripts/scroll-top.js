$(document).scroll(function(){

    var scroll_pos = $(window).scrollTop();
    if(scroll_pos > 10) {

      $("#scrolltop").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");

        //   $(window).scrollTop(0);
        //   $(#body).scrollTop(0);
        //   $("html").animate({ scrollTop: 0 }, "slow");

      });
    }
});
