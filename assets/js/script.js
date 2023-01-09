$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scroll 
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            530,
            'linear'
        );
    });
    // End Smoth Scroll

    // Animasi Ketik
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Selamat Datang", "Di Website", "Portfolio Saya"],
        typeSpeed: 65,
        backSpeed: 45,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Fullstack", "Web Developer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    // End Animasi Ketik

});