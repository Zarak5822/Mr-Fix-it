document.querySelectorAll('a[href="#form"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('header').on('mouseenter', function() {
    $('header .wave').addClass('splash-wave');
});

$('header').on('mouseleave', function() {
    $('header .wave').removeClass('splash-wave');
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});
$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});