function loadPage() {
    setTimeout(showPage, 2000);
};

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
};

loadPage();

$(document).ready(function () {
    $(window).scroll(function () {
        var posTop = $(document).scrollTop();
        if (posTop > 10 && posTop < 213) {
            $('item-1').addClass('animated slideInUp');
        }
    });
});

$('.box').backgroundMove({
    movementStrength: '15'
});

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
