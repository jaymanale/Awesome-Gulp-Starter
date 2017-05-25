document.addEventListener('DOMContentLoaded', function () {
    Typed.new('#typed', {
        stringsElement: document.getElementById('typed-strings'),
        loop: null,
        backDelay: 1200,
        typeSpeed: 50

    });
});

/* smooth sliding with nav*/
$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
});