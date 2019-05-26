$('.sd').click(function () {
    $('.hero, .content').addClass('scrolled');
});

$('.hero').mousewheel(function (e) {
    if (e.deltaY < 0) {
        $('.hero, .content').addClass('scrolled');
        return false;
    }
});

$(window).mousewheel(function (e) {
    if ($('.hero.scrolled').length) {
        if ($(window).scrollTop() == 0 && e.deltaY > 0) {
            $('.hero, .content').removeClass('scrolled');
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.hero-inner').mousemove(function (e) {
    var moveX = (e.pageX * +1 / 15);
    var moveY = (e.pageY * -1 / 15);
    $(this).css('background-position', moveX + 'px' + moveY + 'px');

});
