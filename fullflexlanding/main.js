$(document).ready(function() {
    // nav menu-top
    $('menu-top a').click(function(e) {
        e.preventDefault();

        var menuLink = $(this).attr('href');
        var destinationSection = $(menuLink).offset().top;

        $('html, body').animate({scrollTop: destinationSection}, 1200);
    });

    // section-2 switcher
    $('.menu-landscapes a').click(function(e) {
        e.preventDefault();

        // background switching
        var landscape_class = $(this).attr('class');
        $('#section-2').removeClass();
        $('#section-2').addClass(landscape_class);

        // menu-links (selected) switching
        $('.menu-landscapes a.selected').removeClass('selected');
        $(this).addClass('selected');

        // div switching
        var landscape = $(this).attr('href');
        $('.landscape').not(landscape).css({'display' : 'none'});
        $(landscape).fadeIn();



    });


});