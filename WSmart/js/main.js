$(document).ready(function(){
    var btt = $('.back_to_top');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            btt.fadeIn(200);
        } else {
            btt.fadeOut(200);
        }
    });

    btt.click(function(event){
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 1000);
    });
});